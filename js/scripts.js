
var newArray = [];
var array = [];

  translate = function(sentence){
    array.push(sentence);
    
    for (index = 0; index <= array.length; index ++){
      if (array[index].match(/\d/)){
        return false;
      } else {
        return true;
      }
      if (array[index].match(/^a|e|i|o|u/)){

      }

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
