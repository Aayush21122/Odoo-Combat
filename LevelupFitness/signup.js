


const express = require('express');
const app = express();
const { addUser, getUser } = require('./pg.js');

app.use(express.static(__dirname,{index:'signup.html'} ));
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    if (password === confirmpassword) {
        addUser(name, email, password);
        res.redirect('/login.html'); // Redirect to login page
    } else {
        res.status(400).send('Passwords do not match');
    }
});

app.post('/profile', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUser(email);
        if (user && user.password === password) {
            console.log('Login successful');
            res.sendFile(__dirname + '/profile.html'); // Adjust path if needed
        } else {
            res.status(401).send('Invalid credentials');
        }
        console.log(user[0])
        console.log(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
