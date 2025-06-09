````markdown
# 🔐 Chatango Password Reset

This script automatically helps you reset your Chatango account password using a temporary email and automated retrieval of the verification link and temporary password from the inbox.

## 📦 Features

- Create a temporary email using the [temp-mail.io API](https://temp-mail.io)
- Automatically fetch the verification link from the inbox
- Automatically retrieve the temporary password from the inbox
- Reset Chatango password automatically

## 🗂 Project Structure

project/
├── main.py                # Program entry point  
├── chatngo/
│   ├── tempGo.py          # TempMailClient class (handles temp-mail API logic)  
│   └── chReset.py         # ChatangoReset class (login, update email, reset password)

## 🚀 How to Use

1. Run `main.py`: python main.py
2. Enter your Chatango username and password when prompted.
3. The verification link will be retrieved automatically from the temporary email.
4. The temporary password will also be retrieved automatically.
5. Enter your new password when prompted.
6. Done! Your Chatango password has been reset.

## ⚠️ Notes

* Use only for Chatango accounts that belong to you.
* This tool requires an active internet connection.
* Make sure the API `https://api.internal.temp-mail.io` is accessible.

## 📜 Dependencies

* Python 3.6+
* Required module:

  * `requests`
````

## ✨ Example

![alt text](https://github.com/TubuOwl/chatango-reset/blob/main/21827.png?raw=true)
