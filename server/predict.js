// // Node.js code

// const { exec } = require('child_process');

// // Input data for prediction
// const inputData = [741,5674547.89,5674547.89,5674547.89,0.0,0.0,1];  // Modify this as per your requirement

// // Send input data to the Python script and receive the predictions
// const pythonProcess = exec('python predict.py', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing Python script: ${error}`);
//     return;
//   }

//   const [rfPrediction, nnPrediction] = stdout.trim().split('\n');
//   // console.log(`Python script output: ${stdout}`);

//   console.log(rfPrediction);
//   console.log(nnPrediction);
// });

// pythonProcess.stdin.write(inputData.join(',') + '\n');
// pythonProcess.stdin.end();


const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());


// app.post('/predict', (req, res) => {
//   const inputData = req.body.inputData;  // Extract input data from the request body

//   if (!inputData || !Array.isArray(inputData)) {
//     res.status(400).json({ error: 'Invalid input data' }); // Sending error as JSON
//     return;
//   }

//   // Send input data to the Python script and receive the predictions
//   const pythonProcess = exec('python predict.py', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing Python script: ${error}`);
//       res.status(500).json({ error: 'Error executing Python script' }); // Sending error as JSON
//       return;
//     }

//     const [rfPrediction, nnPrediction] = stdout.trim().split('\n');
//     res.json({ rfPrediction, nnPrediction }); // Sending predictions as JSON
//   });

//   pythonProcess.stdin.write(inputData.join(',') + '\n');
//   pythonProcess.stdin.end();
// });

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

    const [rfPrediction, nnPrediction] = stdout.trim().split('\n');
    res.json({ rfPrediction, nnPrediction });
  });

  pythonProcess.stdin.write(inputData.join(',') + '\n');
  pythonProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
