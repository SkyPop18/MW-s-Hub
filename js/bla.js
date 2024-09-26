const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/add-user', async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send('User added to the database successfully!');
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 