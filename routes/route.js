const route = require("express").Router();
const imageFileUpload = require("../controller/imageFileUpload");
const locaFileUpload = require("../controller/localFileUpload");
const videoFileUpload = require("../controller/videoFileUpload");

route.post("/localFileUpload", locaFileUpload);
route.post("/imageFileUpload", imageFileUpload);
route.post("/videoFileUpload", videoFileUpload);

module.exports = route;
