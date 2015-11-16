console.log ('The bot is starting');

var Twit = require ('twit');

var config = require ('./config');
//console.log(config);
var T = new Twit(config);








/*

//Tweet Stuff

var tweet = {
    status: 'i am really evil.'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
  	console.log("Something went wrong!");
  } else {
    console.log("It worked!");
  }
}
    





//Fetching Tweets

var params = { 
  q: 'alma moreno', 
  count: 3 
} 

T.get('search/tweets', params, gotData);
      
function gotData (err, data, response) {
    var tweets = data.statuses
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        
    }
    
}
*/

// Interval

tweetIt();
setInterval(tweetIt, 1000*20);

function tweetIt() {

	var r = Math.floor(Math.random()*100);

	var tweet = {
	  status: 'random number ' + r + ' i am really evil'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}
