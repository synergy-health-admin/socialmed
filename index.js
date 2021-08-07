const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true // Added to avoid deprecation warning
    }, () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute)

app.use('/api/auth', authRoute)


// app.get('/users', (req, res) => {
//     res.send('Welcome to 😎 🙌🏾 page!')
// })

app.listen(8800, () => {
    console.log('Backend server running on port 8800!')
});