
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');



const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
// Routes
const studentRoutes = require('./Routes/studentRoute');
const mentorRoutes = require('./Routes/mentorRoute');
const loginRoutes = require('./Routes/loginRoute');
const dashboardRoutes = require('./Routes/dashboardRoute');

app.use((req, res, next) => {
    if (req.url === '/login') {
      return next(); // Skip middleware and continue to next middleware or route handler
    }
    authMiddleware.myMiddleware(req, res, next);
  });
app.use('/student', studentRoutes);
app.use('/mentor', mentorRoutes);
app.use('/login',loginRoutes)
app.use('/dashboard',dashboardRoutes)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});