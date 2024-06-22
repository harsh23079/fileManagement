const localFileUpload = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    const imageFile = req.files.imageFile;
    const uploadPath =
      __dirname + "/Files/" + Date.now() + "." + imageFile.name.split(".")[1];
    await imageFile.mv(uploadPath);
    res.status(200).json({ success: true, message: "file locally uploaded" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = localFileUpload;
