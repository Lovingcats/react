var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const { User } = require('../models/User');
const { auth } = require("../middleware/auth");

router.post('/register', (req, res) => {
    const user = new User({
        username: req.body.name,
        userid: req.body.id,
        password: req.body.pwd,
    })
    user.save((err, result) => {
        if (err) {
            res.json({
                success: false,
                massage: 'post data가 제대로 들어오지 않았습니다. 다시 시도해주겠습니까?'
            });
        }
        else {
            console.log('저장 완료')
            res.status(200).json({
                username: req.body.name,
                userid: req.body.id,
                password: req.body.pwd,
                success: true
            });
        }
    })
})

router.post('/signin', (req, res) => {
    var userid = req.body.id;
    var password = req.body.pwd;
    console.log(userid, password);
    if (typeof userid !== "string" && typeof password !== "string") {
        res.send("login failed");
        return;
    }
    User.findOne({ userid: userid }, (err, user) => {
        if (!user) {
            return res.json({massage: "유저를 찾을 수 없습니다."});
        }
        // 요청된 이메일이 db에 있다면 비밀번호 일치여부 확인
        user.comparePassword(password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "틀린 패스워드를 입력하셨습니다."
                });
            else {
                console.log('로그인 되었습니다.');
                user.generateToken((err, user) => {
                    if (err) return res.status(400).send({ success: false, massage: "error"});
                    // 토큰을 쿠키에 저장
                    res.cookie("user_auth", user.token)
                        .json({
                            success: true,
                            name: req.body.name,
                            id: req.body.id,
                            pwd: req.body.pwd
                    })
                });
            }
        });
    });
});


router.get('/logout', auth, (req, res) => {
    let token = req.cookies.user_auth;
    User.findOneAndUpdate({ token: token },
        { token: "" }
        , (err, user) => {
            if (err) return res.json({massage: 'login을 한 뒤에 할 수 있는 기능입니다.'});
            return res.json({massage:'로그아웃이 완료되었습니다.', isAuth: true})
        })
})


module.exports = router;