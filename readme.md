# Second-Hand Shop Backend

This is the backend for a second-hand shop's online store, built using Node.js and MongoDB. It provides an API for managing clothing items, with admin-restricted routes secured via JWT authentication.

## Features

- Store and manage clothing items in a MongoDB database.
- Public API to fetch available clothing for customers.
- Admin routes for managing inventory (add, update, delete items).
- Secure authentication using JWT for admin access.

## Tech Stack

- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **JWT** (Authentication)

## Installation

1. Clone the repository:
   ```sh
   git clone <repo_url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Public Routes

- `GET /clothes` - Fetch all available clothing items.

### Admin Routes (JWT Protected)

- `POST /admin/clothes` - Add a new clothing item.
- `PUT /admin/clothes/:id` - Update clothing details.
- `DELETE /admin/clothes/:id` - Remove a clothing item.

## Authentication

Admins must log in and use the provided JWT token to access protected routes.

## License

This project is licensed under the MIT License.

---

For any issues or contributions, feel free to create a pull request or open an issue!



