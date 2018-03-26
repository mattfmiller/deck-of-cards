$(function() {
  var rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];

  function createDeck() {
    var deck = [];
    suits.forEach(function(suit) {
      rank.forEach(function(rank) {
        deck.push(rank + " of " + suit);
      });
    });
    return deck;
  }

  function printDeck(array) {
    array.forEach(function(card) {
      $("#deck").append("<li>" + card + "</li>");
    });
  }

  printDeck(createDeck());
});
