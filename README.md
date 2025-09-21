# 📝 Blog Application – Backend

Backend API for the **Blog Application**.  
Implements CRUD operations for blog posts and comments, with validation, error handling, and PostgreSQL persistence.

---

## 🛠 Tech Stack
- ⚡ **NestJS 11** – backend framework  
- 🐘 **PostgreSQL** – database  
- 📦 **Sequelize + Sequelize Typescript** – ORM  
- 🛡 **Class-Validator & Class-Transformer** – DTO validation  
- 🌍 **CORS** – frontend-backend communication  
- 🔧 **Jest + Supertest** – unit & e2e testing  
- 📝 **ESLint + Prettier** – code quality  

---

## ⚙️ Setup & Run

### 1. Clone the project
```bash
git clone https://github.com/YOUR_USERNAME/blog_application.git
cd blog_application/backend_blog
2. Install dependencies

npm install
3. Configure environment
Create a .env file in the backend_blog/ root:
PORT=7000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=blog_db
FRONTEND_ORIGIN=http://localhost:5174
👉 Make sure PostgreSQL is running locally and the database blog_db exists.
👉 Adjust credentials to your environment.

4. Run dev server
npm run start:dev
Server will be available at:
👉 http://localhost:7000

📌 API Endpoints (Test with Postman)
🔹 Posts
Create Post – POST /posts

json
Копировать код
{ "title": "My first post", "content": "Hello World!" }
Get All Posts – GET /posts

Get Post by ID – GET /posts/:id

Update Post – PUT /posts/:id


{ "title": "Updated title", "content": "Updated content" }
Delete Post – DELETE /posts/:id

🔹 Comments
Add Comment – POST /comments


{ "postId": 1, "author": "John", "text": "Great article!" }
Get Comments for Post – GET /comments/:postId

📂 Project Structure

backend_blog/
├── src/
│   ├── comments/
│   │   ├── dto/           # DTOs for validation
│   │   ├── models/        # Sequelize models
│   │   ├── comments.controller.ts
│   │   ├── comments.service.ts
│   │   └── comments.module.ts
│   ├── posts/
│   │   ├── dto/           
│   │   ├── models/        
│   │   ├── posts.controller.ts
│   │   ├── posts.service.ts
│   │   └── posts.module.ts
│   ├── filters/           # Global exception filter
│   ├── app.module.ts      # Root module
│   └── main.ts            # Entry point
├── .env
├── package.json
├── tsconfig.json
└── README.md
✅ Features
RESTful API with full CRUD for posts & comments

Server-side validation with DTO + class-validator

Global exception handling with HttpExceptionFilter

PostgreSQL integration using Sequelize

CORS enabled for frontend communication

Scalable modular architecture (Posts & Comments modules)

🚀 Notes
Default port: 5000

Requires PostgreSQL running locally (or use Docker)

Designed to work with the Blog Application frontend (http://localhost:5174)

