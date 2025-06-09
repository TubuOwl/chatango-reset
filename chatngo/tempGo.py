import re
import time
import requests

def extract_https_link(text: str) -> str:
    match = re.search(r'https://\S+', text)
    return match.group(0) if match else ""

def extract_temp_password(text: str) -> str:
    match = re.search(r'Your temporary password is\s*:\s*(\S+)', text)
    return match.group(1) if match else ""

class TempMailClient:
    def __init__(self):
        self.api_url = "https://api.internal.temp-mail.io/api/v3"
        self.sess = requests.Session()

    def domains(self):
        try:
            res = self.sess.get(f"{self.api_url}/domains")
            res.raise_for_status()
            return [d["name"] for d in res.json().get("domains", [])]
        except Exception as e:
            print(f"[!] Failed to fetch domains: {e}")
            return []

    def create_email(self, min_len=10, max_len=15, domain=None):
        try:
            payload = {"min_name_length": min_len, "max_name_length": max_len}
            if domain:
                payload["domain"] = domain
            res = self.sess.post(f"{self.api_url}/email/new", json=payload)
            res.raise_for_status()
            return res.json()["email"]
        except Exception as e:
            print(f"[!] Failed to create email: {e}")
            return None

    def wait_for_verification_link(self, email, interval=3):
        seen = set()
        print("[*] Waiting for verification email...")
        while True:
            try:
                res = self.sess.get(f"{self.api_url}/email/{email}/messages")
                res.raise_for_status()
                msgs = res.json()
                new_msgs = [m for m in msgs if m["id"] not in seen]
                for msg in new_msgs:
                    body = msg.get("body_text", "")
                    link = extract_https_link(body)
                    if link:
                        print("[+] Verification link found.")
                        return link
                    seen.add(msg["id"])
                time.sleep(interval)
            except Exception as e:
                print(f"[!] Failed to read inbox: {e}")
                time.sleep(interval)

    def wait_for_temp_password(self, email, interval=3):
        seen = set()
        print("[*] Waiting for temporary password email...")
        while True:
            try:
                res = self.sess.get(f"{self.api_url}/email/{email}/messages")
                res.raise_for_status()
                msgs = res.json()
                new_msgs = [m for m in msgs if m["id"] not in seen]
                for msg in new_msgs:
                    body = msg.get("body_text", "")
                    pwd = extract_temp_password(body)
                    if pwd:
                        print("[+] Temporary password found.")
                        return pwd
                    seen.add(msg["id"])
                time.sleep(interval)
            except Exception as e:
                print(f"[!] Failed to read inbox: {e}")
                time.sleep(interval)
