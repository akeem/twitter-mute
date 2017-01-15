var muteWords = ["TRUMP"];

var hideTweets  = function(){
  $.each($(".tweet"), function(i, currentTweet){
    muteWords.forEach(function(currentMuteWord){
      if(currentTweet.textContent.toUpperCase().indexOf(currentMuteWord) >= 0){
        $(currentTweet).remove();
      }
    });
  })
};

setInterval(hideTweets, 1000);
