
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  translate = function(sentence){
    if (sentence.match(/\d/)){
      return false;
    } else if (sentence.charAt(0).includes(vowels())){
      return true;
    }
  };



$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    debugger;
    var  sentence = $("input#sentence").val();
    var result = translate(sentence);
    $("#result").text(result);

  });
});
