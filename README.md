# ⚡ElectroNexus - Product Management App

 ElectroNexus is a modern full-stack product management application built with **Next.js (App Router)** and **Express + MongoDB**. The application allows users to browse products publicly, while authenticated users can add new products securely.

---

## Live Features Overview

- Public product listing & product details
- Mock authentication using credentials
- Protected route for adding products
- Cookie-based with handling
- Toast notifications for user feedback
- Responsive & modern UI (Tailwind + DaisyUI)
- Server-side & client-side rendering with NExt.js App Router

---

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React
- Tailwind CSS + DaisyUI
- react-hot-toast


### Backend

- Node.js
- Express.js
- MongoDB (Native Driver)

---

## Setup & installation

### Clone the repository

     git clone

     cd electronexus

## Route Summary

### Public Routes


| Route | Description |
|:-----|:-----:|
| / | Home Page |
| /items | Product list |
| /items/[id] | Product details |
| /login | Login page |
| /terms | Terms $ Conditions |
| /privacy | Privacy Policy |                   

### Protected Routes    

| Route | Description |
|:-----|:-----:|
| /add_item | Add new product (login required) |


                

                      

### API Routes (Backend)

#### Items

| Method | Endpoint | Description |
|:-----|:-----:|-----:|
| Get | /items | Get all products |
| Get | /items/:id | Get product by ID |
| POST | /items | Add new product |

### Auth (Next.js API)

| Method | Endpoint | Description |
|:-----|:-----:|-----:|
| POST | /api/auth/login | Mock login |
| POST | /api/auth/logout | Logout & clear cookie |


## Implemented Features Explained

### Toast Notifications

- Success toast on product creation
- Error toast on failure
- Implemented using react-hot-toast
- Toaster mounted globally in RootLayout

### Protected Routes

- /add_item is protected using Next.js Proxy
- Unauthorized users are redirected to /login
- Cookie (auth_token) is verified automatically

### Navbar Authentication Sync

- Navbar reacts instantly to login/logout
- Uses cookie polling with safe interval
- Prevents hydration mismatch using mounted check

### Image Handling

- Support multiple external image domains
- Configured via next.config.mjs
- Fallback image used if URL is missing

### Future Improvements 

- Replace mock auth with NextAuth.js
- Add role-based access
- Pagination & search
- Image upload instead of URL
- Server Actions integration

### Author

**Built with ❤️ by [Tasnia Zannat]**
