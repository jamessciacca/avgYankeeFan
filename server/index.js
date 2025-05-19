//creating the server call 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//creating app object 
const app = express();
const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

//player route
const Player = require('./models/Player');

app.post('/api/players', async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).send('Player saved!');
  } catch (err) {
    res.status(500).send('Error saving player');
  }
});

//update a players info 
app.put('/api/players/:id', async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,      // the ID in the URL
      req.body,           // the updated data
      { new: true }       // return the updated document
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.status(500).send('Error updating player');
  }
});



//routes
app.get('/', (req, res) => {
    res.send('Welcome to the avgYankeeFan API!')
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//creating my port
//app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));