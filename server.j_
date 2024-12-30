require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db")
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const ticketRoute = require("./router/ticket-router");
const cors = require("cors");
const errormiddleware = require('./middlewares/error-middleware');

//^ lets tackle cors

const corsOptions ={
    origin: "http://localhost:3000",
    methods: ["GET, POST, PUT, DELETE, PATCH, HEAD"],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization,X-Custom-Header',
    //allowedHeaders: ["Content-Type", "application/json"], // Allow specific headers if needed
   // preflightContinue: false, // Don't pass control to the next handler for preflight
    optionsSuccessStatus: 204 
};
app.use(cors(corsOptions));

//middle
app.use(express.json()); //you tell Express to use this middleware for all incoming requests, so it automatically parses any JSON data found in the request body before passing control to the route handlers.
app.use("/", authRoute);
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/ticketform",ticketRoute);



// app.get("/",(req, res)=>{
//     res.status(200).send('hello');
// });

// app.get("/signup",(req, res)=>{
//     res.status(200).send('Welcome to sign up page');
// });

app.use(errormiddleware);

const PORT = 3010;
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port : ${PORT}`);
    });
})


