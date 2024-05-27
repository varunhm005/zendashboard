
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
const taskRoutes = require('./Routes/taskRoute');
const loginRoutes = require('./Routes/loginRoute');
const dashboardRoutes = require('./Routes/dashboardRoute');
const leaderboardRoutes = require('./Routes/leaderboardRoute');
const placementboardRoutes = require('./Routes/placementboardRoute');
const interviewRoutes = require('./Routes/interviewRoute');
const requirementRoutes = require('./Routes/requirementRoute')
const capstoneRoutes = require('./Routes/capstoneRoute')
const queryRoutes = require('./Routes/queryRoute')
const leaveRoutes = require('./Routes/leaveRoute')
const portfolioRoutes = require('./Routes/portfolioRoute')
const codekataRoutes = require('./Routes/codekataRoute')
const webkataRoutes = require('./Routes/webkataRoute')
const additionalSessionRoutes = require('./Routes/additionalSessionRoute')

app.use((req, res, next) => {
    if (req.url === '/login' || req.url === '/login/createUser') {
      return next(); // Skip middleware and continue to next middleware or route handler
    }
    authMiddleware.myMiddleware(req, res, next);
  });
app.use('/student', studentRoutes);
app.use('/task', taskRoutes);
app.use('/login',loginRoutes)
app.use('/dashboard',dashboardRoutes)
app.use('/leaderboard',leaderboardRoutes)
app.use('/placementboard',placementboardRoutes)
app.use('/interview',interviewRoutes)
app.use('/requirement',requirementRoutes)
app.use('/capstone',capstoneRoutes)
app.use('/query',queryRoutes)
app.use('/leave',leaveRoutes)
app.use('/portfolio',portfolioRoutes)
app.use('/codekata',codekataRoutes)
app.use('/webkata',webkataRoutes)
app.use('/additionals',additionalSessionRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});