$(document).ready(function() {
    function getRandomQuote() {
      var episodeNumber = Math.floor(Math.random() * 200) + 1;
      var apiUrl = 'https://frinkiac.com/api/random?count=1&episode=' + episodeNumber;

      $.getJSON(apiUrl, function(data) {
        if (data[0].Episode.Season <= 9) {
          var quote = data[0].Subtitles[0].Content;
          var imageUrl = 'https://frinkiac.com/meme/' + data[0].Episode.Key + '/' + data[0].Timestamp;

          var quoteObj = {
            quote: quote,
            imageUrl: imageUrl
          };

          displayQuote(quoteObj);
        } else {
          getRandomQuote();
        }
      });
    }

    function displayQuote(quoteObj) {
      var quoteContainer = $('#quote-container');
      var image = $('<img>').attr('src', quoteObj.imageUrl);
      var quote = $('<p>').text(quoteObj.quote);
      quoteContainer.empty().append(image, quote);
    }

    getRandomQuote();
  });