# 🧵 LE ZIE - Vintage Clothing Web App 1.0 – Backend

This is the **backend** for the LE ZIE vintage clothing web application, built with **Node.js**, **Express**, **MongoDB** and **MailerLite**. It provides a set of API endpoints for both public users and authenticated admins, supporting full inventory management and dynamic content delivery to the frontend.

---

## ✨ Features

- Store and manage vintage clothing items in a MongoDB database
- Public API to fetch all or individual products
- Admin-only routes to add, edit, delete, or mark as sold items
- Secure JWT authentication system for admin login and protected access

---

## 🧰 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM for MongoDB  
- **JWT (jsonwebtoken)** – Token-based authentication  
- **bcrypt** – Secure password hashing  
- **dotenv** – Environment variable management  
- **CORS** – Cross-origin resource sharing  
- **axios** – Promise-based HTTP client  
- **crypto** – Built-in module for cryptographic operations 

---

## 🌐 API Endpoints

### 📥 Public Routes

- `GET /products`  
  Fetch all available clothing items.

- `GET /products/:_id`  
  Fetch full details of a specific product by ID.

- `POST /api/subscribe`  
  Subscription to the newsletter. Handling of the subscribers through MailerLite.

---

### 🔐 Admin Routes (JWT Protected)

> All admin routes require a valid JWT token and are secured via `authenticateAdmin` middleware.

- `POST /admin/login`  
  Admin login, returns JWT token.

- `POST /admin/create`  
  Add a new clothing item to the database.

- `PUT /admin/edit/:_id`  
  Edit an existing product.

- `PUT /admin/sold/:_id`  
  Mark a product as sold.

- `DELETE /admin/delete/:_id`  
  Delete a product from the database.

---

## 🔐 Authentication

- Admin credentials are verified on login via the `/admin/login` endpoint.
- On successful login, a **JWT token** is returned and must be included in the `Authorization` header for all protected routes:

---

## 🚀 To-Do – Version 2.0

Planned backend upgrades for future releases:

- Add order and checkout endpoints
- Integrate with a payment provider (Mainly Twint and Paypal)
- Build shopping cart and purchase flow support

---

## 🔗 Project Resources

- [🖼️ Wireframes & UI Flow](https://richiscouses.my.canva.site/lezie#home)  
- [🗂️ Trello Planning Board](https://trello.com/b/QqDnmPn8/le-zie)
- [📬 Postman](https://documenter.getpostman.com/view/41161776/2sB2cX91qN)