////////////////////////////////////////////////////////////////
//
// Push service - Send to Client!
//
////////////////////////////////////////////////////////////////
var newsIndex = 0;
var allNews;
module.exports.realtimePushService = function()
{
	var io = require('socket.io').listen(8000);

	// io errors
    io.on('error', function (error) 
	{
        console.log("ioError:  ");
        console.log(error);
    });

    // when client connect
    io.sockets.on('connection', function (socket) 
	{
        console.log('client connected!\n');
        socket.on('disconnect', function () 
		{
            console.log('client disconnected!\n');
        });
        socket.on('error', function (error) 
		{
            console.log("socetError:  ");
            console.log(error);
        });
    });
	
	var newsModel = require('../models/news');
	newsModel.findAll(function (err, news)
	{
		allNews = news;
		setInterval(function (news)
		{
			if (allNews == undefined)
				return;

			console.log(allNews[newsIndex].news);
			io.sockets.emit('newsNotification', allNews[newsIndex++].news);

			if (newsIndex == allNews.length)
				newsIndex = 0;
		},1000);
	});
};