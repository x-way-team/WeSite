var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var myWechatToken = 'nanssywillcatchYOU';
router.use('/', wechat(myWechatToken).text(function (message, req, res, next) {
	if (!req.wxsession.count) {
		req.wxsession.count = 0;
	}
	req.wxsession.count++;
    res.reply([{
        title: '欢迎您第'+ req.wxsession.count + '次光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).image(function (message, req, res, next) {
}).voice(function (message, req, res, next) {
}).video(function (message, req, res, next) {
}).location(function (message, req, res, next) {
}).link(function (message, req, res, next) {
}).event(function (message, req, res, next) {
}).middlewarify());


module.exports = router;
