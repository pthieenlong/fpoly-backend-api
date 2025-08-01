# 🚀 Skillstack
Dự án tốt nghiệp 2026 xây dựng bằng **ExpressJS + TypeScript**.  
Đã setup sẵn Prettier, ESLint, Husky, lint-staged để kiểm soát code sạch trước khi commit.

---

## :package: Yêu cầu hệ thống

- Node.js >= 20.x
- npm hoặc yarn
- Git

---

## ⚙️ Cách setup dự án

:one: Tạo thư mục chính

```bash
mkdir skillstack
```

:two: Clone dự án

```bash
cd skillstack
git clone https://github.com/pthieenlong/skillstack-backend
cd skillstack-backend
```

:three: Cài đặt các dependencies:

```bash
npm install
``` 

:four: Tạo các file môi trường

- Tạo các file env (development, production và test)
- Cấu trúc của 1 file env như sau:
  + PORT: Port của dự án

  + ALLOWED_ORIGINS= url của client-side
  + IS_HTTP_SECURE=  0 khi chạy local, 1 khi chạy production

  + RATE_LIMIT_WINDOW_MS= default là 15 phút (900000)
  + RATE_LIMIT_MAX_REQUESTS= default là 100 request mỗi 15 phút cho 1 window

  + SECRET_ACCESS_TOKEN= chạy lệnh node -> require('crypto').randomBytes(64).toString('hex') 
  + SECRET_REFRESH_TOKEN= chạy lệnh node -> require('crypto').randomBytes(64).toString('hex')

  + DB_CONNECTION_STRING= mongodb connection string
---

## :computer: Các script chạy command

- 	Chạy server development với nodemon

```bash
  npm run dev
```

- 	Build project TypeScript ra thư mục dist

```bash
  npm run build
```

- 	Chạy production (sau khi build)
```bash
  npm run start
```

- 	Chạy môi trường test

```bash
  npm run test
```

- 	Format code với Prettier

```bash
  npm run format
```

---

## :open_file_folder: Cấu trúc source code

```bash
    src/
    ├── config/           # Module cấu hình (ConfigModule đọc biến env)
    ├── controllers/      # Các controller xử lý request
    ├── database/         # Cấu hình database
    ├── middlewares/      # Các middleware khi tiếp nhận request
    ├── models/           # Định nghĩa Model
    ├── routes/           # Định nghĩa router
    ├── services/         # Logic nghiệp vụ với database
    ├── types/            # Các type được định nghĩa
    ├── app.ts         # File chính chạy app Express
```

---

## :wrench: Husky + lint-staged

* Khi chạy ```bash git commit```, dự án sẽ:
- Format các file ```bash .ts``` đã stage bằng Prettier
- Nếu lỗi, commit sẽ bị chặn và buộc phải fix trước.

---

## :rocket: Triển khai production

:one: Build project:

```bash npm run build```

:two: Run project:

```bash npm run start```

---

## :rocket: Triển khai test

- Sẽ setup sau

---

## :books:  Ghi chú

- Luôn đặt đúng biến môi trường (NODE_ENV=development / production / test).
- Nếu thêm thư viện mới, nhớ cập nhật README.md để mọi người biết cách dùng.
- Không được force khi commit

MIT License © 2025 Skillstack