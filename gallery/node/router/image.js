var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
var multer = require("multer");
const { Image } = require("../models/image_moudle");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
      var newFileName = new Date().valueOf() + path.extname(file.originalname);
      cb(null, newFileName);
    },
  }),
});

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ massage: "이미지 화면에 들어오신 것을 확인하십니다." });
});

router.post("/upload", upload.single("imageFile"), (req, res) => {
  let path = "./images/" + req.file.filename;
  const _id = mongoose.Types.ObjectId;
  console.log(_id);
  const image = new Image({
    image: [
      {
        image_path: path,
      },
    ],
  });
  if (!image) {
    image.save((err, result) => {
      if (err) {
        res.json({
          success: false,
          massage:
            "post data가 제대로 들어오지 않았습니다. 다시 시도해주겠습니까?",
        });
      } else {
        console.log("저장 완료");
        res.status(200).json({
          image_path: path,
        });
      }
    });
  } else {
    Image.findOneAndUpdate(
      { _id: _id },
      { $push: { image_path: path } },
      (err, result) => {
        if (err) return res.json({ err: err });
        else {
          console.log("업데이트 완료");
          return res.status(200).json({ image_path: path });
        }
      }
    );
  }
});

module.exports = router;
