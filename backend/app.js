const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Middlewares

///////////////////////////////////////////////////////////////////////////////

// CORS
const useCors = require("./middlewares/cors");
useCors(app);

// Cookie Parser
const useCookieParser = require("./middlewares/cookie-parser");
useCookieParser(app);

// Body Parser
const useBodyParser = require("./middlewares/bodyParser");
useBodyParser(app);

///////////////////////////////////////////////////////////////////////////////

// Routes

///////////////////////////////////////////////////////////////////////////////

// Home Route
const homeRouter = require("./routes/home");
app.use("/", homeRouter);

// Verify Route
const verifyRouter = require("./routes/verify");
app.use("/verify", verifyRouter);

// Recipe Route
const recipeRouter = require("./routes/recipe");
app.use("/recipe", recipeRouter);

// Blog Route
const blogRouter = require("./routes/blog");
app.use("/blog", blogRouter);

// Image Route
const imageRouter = require("./routes/image");
app.use("/image", imageRouter);

// Login Route
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

// Signup Route
const signupRouter = require("./routes/signup");
app.use("/signup", signupRouter);

// User Route
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// Category Route
const categoryRouter = require("./routes/category");
app.use("/category", categoryRouter);

// Signout Route
const signoutRouter = require("./routes/signout");
app.use("/signout", signoutRouter);

//Comments Route
const commentsRouter = require("./routes/comment");
app.use("/comments", commentsRouter);

// Newsletter Route
const newsletterRouter = require("./routes/newsletter");
app.use("/newsletter", newsletterRouter);

///////////////////////////////////////////////////////////////////////////////

// Connect to database and  Listen
  app.listen(PORT, () => {
    const db = require("./model/db");
    db();
    console.log(`Server is running on port ${PORT}`);
  });
