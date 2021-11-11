require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const app = express();

process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});

// Required for body validation
app.use(express.json({ extended: false }));
// Connect to MongoDB Database
connectDB();

app.get("/", (req, res) => res.send("Reached API!"));

// Routes
app.use("/api/test", require("./routes/api/test"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
