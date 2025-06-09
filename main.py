# main.py

from chatngo.chReset import ChatangoReset
from chatngo.tempGo import TempMailClient

def main():
    u = input("Username: ")
    p = input("Password: ")

    mail_client = TempMailClient()
    domains = mail_client.domains()
    email = mail_client.create_email(domain=domains[0] if domains else None)
    print(f"[*] Temporary email created: {email}")

    bot = ChatangoReset(u, p, email)

    print("[*] Logging in...")
    if not bot.login():
        print("Login failed.")
        return

    print("[*] Updating email...")
    if not bot.update_email():
        print("Failed to update email.")
        return

    link = mail_client.wait_for_verification_link(email)
    print("[✓] Verification link received:", link)

    print("[*] Requesting password reset...")
    if not bot.request_reset():
        print("Failed to send reset request.")
        return

    temp_pass = mail_client.wait_for_temp_password(email)
    print("[✓] Temporary password received:", temp_pass)

    newp = input("New password: ")
    if bot.reset_password(temp_pass, newp):
        print("✅ Password has been successfully reset!")
    else:
        print("❌ Failed to reset password.")

    print("[Email]: ", email)
    print("[Username]:", u)
    print("[New Password]:", newp)

if __name__ == "__main__":
    main()
