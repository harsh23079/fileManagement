const { Schema, model } = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new Schema({
  name: { type: String, require: true },
  fileUrl: { type: String, require: true },
  email: { type: String, require: true },
  tag: { type: String, require: true },
});

fileSchema.post("save", async function (doc) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,

      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD,
      },
    });

  
    transporter.sendMail(
      {
        from: process.env.HOST, // sender address
        to: doc.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>Hello world?</b><p>Your file uploaded on cloudinary</p> <h1>View here </h1>${doc.fileUrl}`, // html body
      },
      (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      }
    );
    // console.log("info", info);
    console.log("mail sent");
  } catch (err) {
    console.error(err.meesage);
  }
});

module.exports = model("File", fileSchema);
