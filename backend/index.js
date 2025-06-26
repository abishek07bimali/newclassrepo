const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/routes");
const cors = require('cors');
const { sequelize, connectDB } = require("./db/database");

const app = express();
app.use(express.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

const port = process.env.PORT;

app.use('/uploads', express.static('uploads'));

// app.use("/uploads", (req, res, next) => {
//   express.static(path.resolve(__dirname, "uploads"))(req, res, next);
// });

// const corsOptions = {
//   credentials: true,
//   origin: ['http://localhost:5173', 'http://localhost:80'] 
// };




app.use("/api/users", userRoutes);
app.use("/api/pract", require('./routes/pracRoute'));
app.use("/apiv1/testing", require('./routes/testRoute'))

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const startServer = async () => {
  await connectDB();
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
startServer();
