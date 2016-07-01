var newsMosel = require('..\models\news');
var io = require('socket.io').listen(8000);

var allNews;

////////////////////////////////////////////////////////////////
//
// Push service - Send to Client!
//
////////////////////////////////////////////////////////////////
var realtimePushService = function () 
{
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
	
	allNews = newsMosel.findAll.
	
	while (true)
	{
		for (var currNews : allNews)
		{
			setTimeout(function() 
			{
				io.sockets.emit('newsNotification', JSON.parse(currNews));
			}, 1000);
		}
	}
};