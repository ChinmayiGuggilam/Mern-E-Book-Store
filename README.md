# Mern-E-Book-Store
It is a basic e-commerce web application where all kinds of books are sold with verified payment page

# 📚 Bookworm Bookshelf

**Bookworm Bookshelf** is  designed to enhance the online reading experience by offering users a digital bookstore and a curated blog section.

##  Features

- 🔐 **User Authentication**
  - Secure login and registration using JWT
  - Personalized user sessions

- 🏠 **Dashboard**
  - Clean homepage with navigation to Bookstore and Blog sections

- 📖 **Bookstore**
  - Book listings with images, descriptions, and pricing
  - Genre-based filtering
  - Add-to-Cart and Buy Now options

- 📝 **Blog Section**
  - Engaging articles about reading habits and book recommendations

- 🛒 **Shopping Cart**
  - Add, remove, and review selected books
  - Proceed to payment simulation

- 🧑‍💼 **(Optional) Admin Module**
  - Manage books and blog articles (CRUD operations)

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, MongoDB Compass |
| Tools | Visual Studio Code |



### Software
- Visual Studio Code
- Node.js & npm
- MongoDB Compass
- Browser (Chrome/Edge/Firefox)



## 📁 Project Structure

BookwormBookshelf/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Home.js, Cart.js, Header.js, etc.
│ │ └── App.js
│
├── server/ # Express backend
│ ├── models/ # MongoDB Models
│ ├── routes/ # API routes
│ └── server.js
│
├── README.md
└── package.json

---

## 🧪 Modules Overview

1. **User Authentication Module**
   - Secure login/registration with JWT

2. **Homepage Module**
   - Navigation to bookstore and blog cards

3. **Bookstore Module**
   - Filter, add to cart, purchase books

4. **Blog Articles Module**
   - List of articles for readers

5. **Cart Module**
   - View/manage selected books and checkout

6. **Admin Module** *(Optional)*
   - Add/edit/delete books and articles



### Prerequisites
- Node.js
- MongoDB (Local or Atlas)
- Git

### Steps

# Backend Setup
cd server
npm install
npm start

# Frontend Setup
cd ../client
npm install
npm start
Make sure MongoDB is running locally or update the MongoDB URI in server/config/db.js.

📸 Project Screenshots
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/b3d618ce-a00d-4e69-bab2-41044ab041cf" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/c1ebdf7a-96ce-4aaf-9e8d-d5c342e75435" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/fd6b007f-6bb4-4e56-a04f-c56291bd468b" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/918b3b1f-b09d-4716-b232-f33d0613dd28" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/dad8bbf5-d051-43bb-8618-bd44bb1c8d67" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/70ce565e-b855-4ab4-ab2f-7ec18b1050d1" />




