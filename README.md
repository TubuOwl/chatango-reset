Berikut adalah versi **README.md** yang sudah diformat agar tampil rapi dan konsisten saat ditampilkan di GitHub:

```markdown
# 🔐 Chatango Password Reset Automation

Skrip ini secara otomatis membantu Anda untuk mengganti password akun **Chatango** menggunakan email sementara dan otomatisasi pengambilan tautan verifikasi serta password sementara dari inbox email.

## 📦 Fitur

- Membuat email sementara menggunakan [temp-mail.io API](https://temp-mail.io)
- Mengambil tautan verifikasi dari email
- Mengambil password sementara dari email
- Reset password Chatango secara otomatis

## 🗂 Struktur File

```

project/
├── main.py                # Entry point program
├── chatngo/
│   ├── tempGo.py          # Kelas TempMailClient (temp-mail API logic)
│   └── chReset.py         # Kelas ChatangoReset (login, update email, reset password)

````

## 🚀 Cara Pakai

1. Jalankan `main.py`:

   ```bash
   python main.py
````

2. Masukkan username dan password Chatango Anda saat diminta.
3. Tautan verifikasi akan diambil otomatis dari email sementara.
4. Password sementara juga akan diambil otomatis dari email.
5. Masukkan password baru ketika diminta.
6. Selesai! Password akun Chatango Anda telah di-reset.

## ⚠️ Catatan

* Gunakan hanya untuk akun Chatango milik Anda sendiri.
* Proyek ini memerlukan koneksi internet.
* Pastikan API `https://api.internal.temp-mail.io` bisa diakses.

## 📜 Dependensi

* Python 3.6+
* Modul:

  * `requests`

Install dependensi dengan:

```bash
pip install requests
```

```

### Siap pakai untuk GitHub
Cukup simpan ini ke file `README.md` di root folder proyek Anda, dan GitHub akan menampilkannya dengan format yang baik secara otomatis. Jika butuh tambahan seperti badge status, lisensi, atau GIF demo, saya juga bisa bantu menambahkan.
```
