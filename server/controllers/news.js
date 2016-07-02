////////////////////////////////////////////////////////////////
//
// Push service - Send to Client!
//
////////////////////////////////////////////////////////////////
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
	var allNews = newsModel.shapirov();
	
	while (true)
	{
		for (var currNews in allNews)
		{
			setTimeout(function() 
			{
				io.sockets.emit('newsNotification', JSON.parse(currNews));
			}, 1000);
		}
	}
};