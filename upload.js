const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5047;

// Replace 'your-mongodb-atlas-connection-string' with your actual MongoDB Atlas connection string
const mongoUri = 'mongodb+srv://hutum:hutum@cluster0.v8sh5.mongodb.net/Newdb';

mongoose.connect(mongoUri, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

// Define a Mongoose schema for your data
const dataSchema = new mongoose.Schema({
firstName: String,
});
const DataModel = mongoose.model("notice", dataSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
const indexPath = path.join(__dirname, 'upload.html');
res.sendFile(indexPath);
});
// Define the route to handle form submission and save data to MongoDB
app.post('/upload', async (req, res) => {
try {
// Extract data from the form
const { firstName, lastName, email, age } = req.body;
// Create a new data instance
const newData = new DataModel({
firstName,
});
// Save the new data to the database
await newData.save();
// Respond with a success message or appropriate response
res.send('Data saved successfully');
} catch (error) {
console.error('Error:', error);
res.status(500).send('Internal Server Error');
}
});
app.get('/api/users', async (req, res) => {
try {
// Fetch data from the database
const users = await DataModel.find();
// Send the data as JSON
res.json(users);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
});
app.post('/delete', async (req, res) => {
const { firstName } = req.body;
try {
const deletedUser = await DataModel.findOneAndDelete({ firstName });
if (!deletedUser) {
console.log('No user found with the given first name.');
return res.status(404).json({ message: 'No user found with the given first name.' });
}
console.log('User deleted successfully:', deletedUser);
res.status(200).json({ message: 'User deleted successfully' });
} catch (err) {
console.error('Error deleting user:', err);
res.status(500).json({ message: 'Internal server error' });
}
});







// Define a Mongoose schema for your data
const dataSchemaexam = new mongoose.Schema({
  firstName: String,
  });
  const DataModelexam = mongoose.model("exam", dataSchema);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/exam', (req, res) => {
  const indexPath = path.join(__dirname, 'uploadexam.html');
  res.sendFile(indexPath);
  });
  // Define the route to handle form submission and save data to MongoDB
  app.post('/uploadexam', async (req, res) => {
  try {
  // Extract data from the form
  const { firstName, lastName, email, age } = req.body;
  // Create a new data instance
  const newData = new DataModelexam({
  firstName,
  });
  // Save the new data to the database
  await newData.save();
  // Respond with a success message or appropriate response
  res.send('Data saved successfully');
  } catch (error) {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
  }
  });
  app.get('/api/exam', async (req, res) => {
  try {
  // Fetch data from the database
  const users = await DataModelexam.find();
  // Send the data as JSON
  res.json(users);
  } catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
  });
  app.post('/deleteexam', async (req, res) => {
  const { firstName } = req.body;
  try {
  const deletedUser = await DataModelexam.findOneAndDelete({ firstName });
  if (!deletedUser) {
  console.log('No user found with the given first name.');
  return res.status(404).json({ message: 'No user found with the given first name.' });
  }
  console.log('User deleted successfully:', deletedUser);
  res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
  console.error('Error deleting user:', err);
  res.status(500).json({ message: 'Internal server error' });
  }
  });












 // Define a Mongoose schema for your data
const dataSchemaroutine = new mongoose.Schema({
  firstName: String,
  });
  const DataModelroutine = mongoose.model("routine", dataSchema);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/routine', (req, res) => {
  const indexPath = path.join(__dirname, 'uploadroutine.html');
  res.sendFile(indexPath);
  });
  // Define the route to handle form submission and save data to MongoDB
  app.post('/uploadroutine', async (req, res) => {
  try {
  // Extract data from the form
  const { firstName, lastName, email, age } = req.body;
  // Create a new data instance
  const newData = new DataModelroutine({
  firstName,
  });
  // Save the new data to the database
  await newData.save();
  // Respond with a success message or appropriate response
  res.send('Data saved successfully');
  } catch (error) {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
  }
  });
  app.get('/api/routine', async (req, res) => {
  try {
  // Fetch data from the database
  const users = await DataModelroutine.find();
  // Send the data as JSON
  res.json(users);
  } catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
  });
  app.post('/deleteroutine', async (req, res) => {
  const { firstName } = req.body;
  try {
  const deletedUser = await DataModelroutine.findOneAndDelete({ firstName });
  if (!deletedUser) {
  console.log('No user found with the given first name.');
  return res.status(404).json({ message: 'No user found with the given first name.' });
  }
  console.log('User deleted successfully:', deletedUser);
  res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
  console.error('Error deleting user:', err);
  res.status(500).json({ message: 'Internal server error' });
  }
  });
 






  // Define a Mongoose schema for your data
const dataSchemaadmission = new mongoose.Schema({
  firstName: String,
  });
  const DataModeladmission = mongoose.model("admission", dataSchema);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/admission', (req, res) => {
  const indexPath = path.join(__dirname, 'uploadadmission.html');
  res.sendFile(indexPath);
  });
  // Define the route to handle form submission and save data to MongoDB
  app.post('/uploadadmission', async (req, res) => {
  try {
  // Extract data from the form
  const { firstName, lastName, email, age } = req.body;
  // Create a new data instance
  const newData = new DataModeladmission({
  firstName,
  });
  // Save the new data to the database
  await newData.save();
  // Respond with a success message or appropriate response
  res.send('Data saved successfully');
  } catch (error) {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
  }
  });
  app.get('/api/admission', async (req, res) => {
  try {
  // Fetch data from the database
  const users = await DataModeladmission.find();
  // Send the data as JSON
  res.json(users);
  } catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
  });
  app.post('/deleteadmission', async (req, res) => {
  const { firstName } = req.body;
  try {
  const deletedUser = await DataModeladmission.findOneAndDelete({ firstName });
  if (!deletedUser) {
  console.log('No user found with the given first name.');
  return res.status(404).json({ message: 'No user found with the given first name.' });
  }
  console.log('User deleted successfully:', deletedUser);
  res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
  console.error('Error deleting user:', err);
  res.status(500).json({ message: 'Internal server error' });
  }
  });










// Define a Mongoose schema for your data
const cdataSchema = new mongoose.Schema({
  date: String,
  class6ma: String,
  class6mp: String,
  class6fa: String,
  class6fp: String,
  class7ma: String,
  class7mp: String,
  class7fa: String,
  class7fp: String,
  class8ma: String,
  class8mp: String,
  class8fa: String,
  class8fp: String,
  class9ma: String,
  class9mp: String,
  class9fa: String,
  class9fp: String,
  class10ma: String,
  class10mp: String,
  class10fa: String,
  class10fp: String,
  });
  const cDataModel = mongoose.model("it", cdataSchema);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/c', (req, res) => {
  const indexPath = path.join(__dirname, 'uploadclasssix.html');
  res.sendFile(indexPath);
  });
  // Define the route to handle form submission and save data to MongoDB
  app.post('/uploadc', async (req, res) => {
  try {
  // Extract data from the form
  const { date, class6ma, class6mp, class6fa, class6fp,
    class7ma, class7mp, class7fa, class7fp,
    class8ma, class8mp, class8fa, class8fp,
    class9ma, class9mp, class9fa, class9fp,
    class10ma, class10mp, class10fa, class10fp
  } = req.body;
  // Create a new data instance
  const newData = new cDataModel({
  date,
  class6ma,
  class6mp,
  class6fa,
  class6fp,
  class7ma, class7mp, class7fa, class7fp,
    class8ma, class8mp, class8fa, class8fp,
    class9ma, class9mp, class9fa, class9fp,
    class10ma, class10mp, class10fa, class10fp,
  });
  // Save the new data to the database
  await newData.save();
  // Respond with a success message or appropriate response
  res.send('Data saved successfully');
  } catch (error) {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
  }
  });

 
  










app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});