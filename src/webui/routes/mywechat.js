var express = require('express');
var router = express.Router();
var wechat = require('wechat');

router.use('/', wechat('nanssywillcatchYOU', function (req, res, next) {
    res.reply([{
        title: '欢迎您的光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}));


module.exports = router;
