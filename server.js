const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
require("dotenv").config();
const route = require("./routes/route");
const db = require("./config/database");
const cloudinary = require("./config/cloudinary");

db();
cloudinary();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(express.json());

app.use("/api/v1", route);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port:${PORT}`));
