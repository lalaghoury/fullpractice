const cors = require("cors");

const useCors = (app) => {
  app.use(
    cors({
      origin: "https://perfectrecipe-delta.vercel.app",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
};

module.exports = useCors;
