DENTLUXORY – WHERE DENTAL MEETS LUXURY

Welcome to DENTLUXORY, a professional and luxurious dental appointment application. This full-stack project allows users to book dental appointments online, and the admin can manage and view all bookings. The application is fully responsive, meaning it works perfectly on any device – mobile, tablet, or desktop.

✨ Features

Book An Appointment Form – Users can submit their details to schedule an appointment.

Admin UI – View all user bookings .

Full-stack Application – React frontend + Node.js backend + MongoDB database.

Responsive Design – Works seamlessly on any device.

Real-time Database – All appointment data is stored in MongoDB.


🌐 Frontend Navigation

The frontend of DENTLUXORY includes a complete navigation menu to explore the website:

Home – The landing page with a beautiful introduction to DENTLUXORY.

About – Learn more about the dental clinic and its luxurious services.

Services – Explore all dental treatments and services offered.

Testimonial – Read reviews and experiences from our happy patients.

Contact – Book an appointment or get in touch with the clinic.

These links are visible on the navbar and clicking them scrolls smoothly to the corresponding section on the page.
💻 Tech Stack

Frontend: React with Vite

Backend: Node.js + Express.js

Database: MongoDB

Styling: CSS / React Icons

🚀 Project Setup

Follow these steps carefully to run the project locally:

1️⃣ Install Node.js

Download Node.js from https://nodejs.org/

Install it on your computer.

Check installation by running in terminal:

node -v
npm -v

2️⃣ Install React (Vite) for Frontend

Open terminal in your desired project folder.

npm create vite@latest frontend


Select React as the framework.

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Run the frontend:

npm run dev


The frontend will start at http://localhost:5173 (or similar).

3️⃣ Setup Backend (Node.js + Express)

Navigate to the backend folder:

cd backend


Install required packages:

npm install express mongoose cors dotenv nodemon


Start the backend server:

npx nodemon server.js


Backend runs on http://localhost:5000 (or the port defined in server.js).

4️⃣ Connect MongoDB

Make sure MongoDB is installed locally: https://www.mongodb.com/try/download/community

Start MongoDB server:

mongod


Open MongoDB shell to check connection:

mongosh


You should see:

✅ MongoDB connected successfully


Your backend (server.js) should connect to MongoDB using a connection string from .env:

MONGO_URI=mongodb://localhost:27017/dentluxory

5️⃣ Connect Frontend with Backend

The frontend makes API calls to backend routes for booking appointments, fetching user data, etc.

Example API endpoints:

POST /api/appointments → Save a new appointment
GET /api/appointments → Get all appointments for admin UI


Make sure your backend is running, then open frontend and test the form.

6️⃣ Run Both Frontend & Backend Together

Navigate to project root folder:

cd healthcare-app


Run:

npm start

This will start both frontend and backend simultaneously.


🛠 How to Use

Open http://localhost:5173 in browser.

Fill out Book An Appointment form.

Data will be stored in MongoDB automatically.

Admin can view all bookings in Admin UI .

Make sure both frontend and backend are running.

✅ Notes

Make sure .env file is properly set in backend folder:

MONGO_URI=mongodb://127.0.0.1:27017/healthcare
PORT=5000


Ensure MongoDB server is running before starting backend.

Use npm install in both frontend and backend folders to install dependencies.

🌟 Contact

Project by Manjulatha Siddantam – MERN Stack Developer
Professional dental appointment solution where Dental meets Luxury!

📧 Contact

For any queries or support regarding the project, feel free to reach out at:

📨 manjulathasiddantham1@gmail.com.
