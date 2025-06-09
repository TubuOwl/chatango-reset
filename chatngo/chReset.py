# chatngo/chReset.py

import requests
import re

class ChatangoReset:
    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email
        self.token = None
        self.base_url = "https://chatango.com"
        self.headers = {
            "Origin": "http://st.chatango.com",
            "User-Agent": "Mozilla/5.0"
        }

    def post(self, endpoint, data):
        return requests.post(f"{self.base_url}/{endpoint}", data=data, headers=self.headers)

    def login(self, pwd=None):
        res = self.post("login", {
            "user_id": self.username,
            "password": pwd or self.password,
            "storecookie": "on",
            "checkerrors": "yes"
        })
        match = re.search(r'auth\.chatango\.com=(.*?);', res.headers.get("Set-Cookie", ""))
        self.token = match.group(1) if match else None
        return bool(self.token)

    def update_email(self):
        return self.post("updateprofile", {
            "s": self.token,
            "auth": "token",
            "arch": "h5",
            "src": "group",
            "action": "update",
            "email": self.email
        }).ok

    def request_reset(self):
        return self.post("forgot", {
            "email": self.email,
            "checkerrors": "yes"
        }).ok

    def reset_password(self, temp_pass, new_pass):
        return self.post("reset", {
            "login": self.username,
            "password": temp_pass,
            "password_new": new_pass,
            "password_confirm": new_pass,
            "storecookie": "1",
            "resetsubmit": "reset",
            "checkerrors": "yes"
        }).ok
