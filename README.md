# 📝 Task Manager - MERN Stack Application

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A modern, full-stack task management application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) featuring secure user authentication, real-time updates, and comprehensive CRUD operations.


## ✨ Features

### 🔐 Authentication & Security
- 👤 User registration and login with JWT authentication
- 🔒 Password hashing with bcryptjs
- 🛡️ Input validation and sanitization
- 🚦 Rate limiting for API protection
- 🌐 Secure CORS configuration

### 📝 Task Management
- ➕ Create new tasks with title and description
- 📝 Edit existing tasks inline
- ✅ Mark tasks as complete/pending
- 🗑️ Delete unwanted tasks
- 🔄 Real-time updates without page reload

### 📱 User Experience
- 📱 Responsive design (mobile-friendly)
- ⏳ Loading states and error handling
- 🎨 Clean, intuitive interface
- 👥 User-specific task management

## 🛠️ Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas) - [Setup Guide](https://docs.mongodb.com/manual/installation/)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-mern.git
cd task-manager-mern
```

### 2. 💾 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secure_jwt_secret_key_here_min_32_chars
PORT=5000
FRONTEND_URL=http://localhost:3000
```

> ⚠️ **Important:** Replace `JWT_SECRET` with a secure random string (minimum 32 characters)

### 3. 🎨 Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Database Setup

Make sure MongoDB is running on your system:
- **Local MongoDB:** Start MongoDB service
- **MongoDB Atlas:** Update the `MONGODB_URI` in `.env` with your Atlas connection string

## 🏃 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
🌐 Backend will run on `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm start
```
🌐 Frontend will run on `http://localhost:3000`

> 💡 **Tip:** Run both servers in separate terminal windows

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected Routes)
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Usage

1. **Register/Login:** Create an account or login with existing credentials
2. **Add Tasks:** Click "Add Task" button to create new tasks
3. **Edit Tasks:** Click "Edit" button on any task to modify it
4. **Toggle Status:** Use "Mark Complete/Pending" to change task status
5. **Delete Tasks:** Click "Delete" button to remove tasks

## 📁 Project Structure

```
Task-manager/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## 💻 Technologies Used

### Backend
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexibility
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing and salting
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - Component-based UI library
- **React Router** - Declarative routing
- **Axios** - Promise-based HTTP client
- **CSS-in-JS** - Scoped component styling

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting and formatting
- **Git** - Version control

## Sample Data

After registration, you can create sample tasks:

1. **Task 1:**
   - Title: "Complete project documentation"
   - Description: "Write comprehensive README and API documentation"
   - Status: Pending

2. **Task 2:**
   - Title: "Review code changes"
   - Description: "Review pull requests and provide feedback"
   - Status: Complete

3. **Task 3:**
   - Title: "Deploy to production"
   - Description: "Deploy the application to production server"
   - Status: Pending

## Security Features

- **JWT Authentication** with token expiration
- **Password Hashing** using bcryptjs
- **Input Validation** on all endpoints
- **Rate Limiting** to prevent abuse
- **Secure CORS** configuration
- **Error Handling** without information leakage

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check the `MONGODB_URI` in `.env` file
   - For MongoDB Atlas, ensure IP whitelist is configured

2. **Port Already in Use:**
   - Change the PORT in `.env` file
   - Kill existing processes using the port

3. **CORS Issues:**
   - Ensure the proxy is set correctly in frontend `package.json`
   - Check CORS configuration in backend

4. **Authentication Issues:**
   - Verify JWT_SECRET is set in `.env`
   - Check if token is being sent in request headers

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**[Your Name]**
- GitHub: [PranavDoke](https://github.com/PranavDoke)
- Email: pranavdoke7@gmail.com

## 🙏 Acknowledgments

- Thanks to the MERN stack community
- Inspiration from modern task management tools
- Built with ❤️ for learning and demonstration

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/task-manager-mern)
![GitHub issues](https://img.shields.io/github/issues/your-username/task-manager-mern)
![GitHub stars](https://img.shields.io/github/stars/your-username/task-manager-mern)

---

⭐ **Star this repository if you found it helpful!**
