# 🧵 LE ZIE - Vintage Clothing Web App – Backend

This is the **backend** for the LE ZIE vintage clothing web application, built with **Node.js**, **Express**, and **MongoDB**. It provides a set of API endpoints for both public users and authenticated admins, supporting full inventory management and dynamic content delivery to the frontend.

---

## ✨ Features

- Store and manage vintage clothing items in a MongoDB database
- Public API to fetch all or individual products
- Admin-only routes to add, edit, delete, or reserve items
- Secure JWT authentication system for admin login and protected access

---

## 🧰 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM for MongoDB  
- **JWT** – Admin authentication  
- **bcrypt** – Password hashing  
- **dotenv** – Environment configuration  
- **CORS** – Cross-origin resource sharing

---

## 🌐 API Endpoints

### 📥 Public Routes

- `GET /products`  
  Fetch all available clothing items.

- `GET /products/:_id`  
  Fetch full details of a specific product by ID.

---

### 🔐 Admin Routes (JWT Protected)

> All admin routes require a valid JWT token and are secured via `authenticateAdmin` middleware.

- `POST /admin/login`  
  Admin login, returns JWT token.

- `GET /admin/products`  
  Fetch all products (including reserved/sold).

- `GET /products/:_id`  
  Fetch a single product (admin access).

- `POST /admin/create`  
  Add a new clothing item to the database.

- `PUT /admin/edit/:_id`  
  Edit an existing product.

- `PUT /admin/reserve/:_id`  
  Mark a product as reserved.

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
- Integrate with a payment provider (e.g., Stripe)
- Build shopping cart and purchase flow support

---

## 🔗 Project Resources

- [🖼️ Wireframes & UI Flow](https://richiscouses.my.canva.site/lezie#home)  
- [🗂️ Trello Planning Board](https://trello.com/b/QqDnmPn8/le-zie)
