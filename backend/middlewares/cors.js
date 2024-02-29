const cors = require("cors");

const useCors = (app) => {
  app.use(
    cors({
      origin: "https://food123-j0imw9hio-aasil-ghourys-projects.vercel.app",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
};

module.exports = useCors;
