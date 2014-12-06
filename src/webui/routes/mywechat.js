var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var myWechatToken = 'nanssywillcatchYOU';
router.use('/', wechat(myWechatToken).text(function (message, req, res, next) {
  	// message为文本内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125035',
  	// MsgType: 'text',
  	// Content: 'http',
  	// MsgId: '5837397576500011341' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).image(function (message, req, res, next) {
  	// message为图片内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359124971',
  	// MsgType: 'image',
  	// PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
  	// MediaId: 'media_id',
  	// MsgId: '5837397301622104395' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).voice(function (message, req, res, next) {
  	// message为音频内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125022',
  	// MsgType: 'voice',
  	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
  	// Format: 'amr',
  	// MsgId: '5837397520665436492' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).video(function (message, req, res, next) {
  	// message为视频内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125022',
  	// MsgType: 'video',
  	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
  	// ThumbMediaId: 'media_id',
  	// MsgId: '5837397520665436492' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).location(function (message, req, res, next) {
  	// message为位置内容
 	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125311',
  	// MsgType: 'location',
  	// Location_X: '30.283950',
  	// Location_Y: '120.063139',
  	// Scale: '15',
  	// Label: {},
  	// MsgId: '5837398761910985062' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).link(function (message, req, res, next) {
  	// message为链接内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125022',
  	// MsgType: 'link',
  	// Title: '公众平台官网链接',
  	// Description: '公众平台官网链接',
  	// Url: 'http://1024.com/',
  	// MsgId: '5837397520665436492' }

    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).event(function (message, req, res, next) {
  	// message为事件内容
  	// { ToUserName: 'gh_d3e07d51b513',
  	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  	// CreateTime: '1359125022',
  	// MsgType: 'event',
  	// Event: 'LOCATION',
  	// Latitude: '23.137466',
  	// Longitude: '113.352425',
  	// Precision: '119.385040',
  	// MsgId: '5837397520665436492' }
  	
    res.reply([{
        title: '欢迎'+ message.FromUserName + '光临',
        description: '小站正在建设中，欢迎您的加入，敬请期待',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
    }]);
}).middlewarify());


module.exports = router;
