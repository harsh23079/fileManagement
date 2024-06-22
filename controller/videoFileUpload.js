const File = require("../model/fileSchema");
const cloudinary = require("cloudinary").v2;

const videoFileUpload = async (req, res) => {
  try {
    const { name, email, tag } = req.body;
    const videoFile = req.files.videoFile;

    const folderName = "PhotuVideo";
    const cloudResponse = await cloudinary.uploader.upload(
      videoFile.tempFilePath,
      { resource_type: "video", folderName }
    );

    const data = new File({
      name,
      email,
      tag,
      fileUrl: cloudResponse.secure_url,
    });
    const dbResponse = await data.save();

    res.status(200).json({ success: true, message: "successfully uploaded" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = videoFileUpload;
