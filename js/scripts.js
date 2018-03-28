debugger;

var array = [];
for ( var index = 0; index <= inputNumber[index].length; index ++){
  array.push(inputNumber[index]);
};



$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputNumber = $("input#pigLatin").val();
    var result = convertor(inputNumber);
    // var result = ignoreNumber;
  });
});
