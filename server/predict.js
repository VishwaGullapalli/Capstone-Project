const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// const secretKey = process.env.JWT_SECRET_KEY;

const corsOptions = {
  // origin: 'https://titanwallet.me',
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Enable CORS for all routes
app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());

app.use(cookieParser());

app.post('/predict', (req, res) => {
  const inputData = req.body.inputData;  // Extract input data from the request body

  if (!inputData || !Array.isArray(inputData)) {
    res.status(400).send('Invalid input data');
    return;
  }

  // Send input data to the Python script and receive the predictions
  const pythonProcess = exec('python predict.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      res.status(500).send('Error executing Python script');
      return;
    }

    const [rfPrediction, nnPrediction, current_time, outString] = stdout.trim().split('\n');
    res.json({ rfPrediction, nnPrediction, current_time, outString });
  });

  pythonProcess.stdin.write(inputData.join(',') + '\n');
  pythonProcess.stdin.end();
});


// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.user = user;
    next();
  });
};

app.post('/login', (req, res) => {
  // Authenticate user (validate credentials)
  const user = { id: 1, username: 'exampleUser' };

  // Create and send JWT token
  const token = jwt.sign(user, secretKey);
  res.cookie('token', token, { httpOnly: true });
  res.send('Login successful');
});

app.post('/logout', (req, res) => {
  // Clear JWT token on logout
  res.clearCookie('token');
  res.send('Logout successful');
});

app.get('/dashboard', verifyToken, (req, res) => {
  res.send(`Welcome, ${req.user.username}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
