$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var variables = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//Below is the for loop
    for(var i = 0; i < variables.length; i += 1) {
      var userInput = $("input#" + variables[i]).val();
      $("." + variables[i]).text(userInput);
      $("#story").show();
    }

  });
  });
  //below is the forEach loop
    // variables.forEach(function(variable){
    //   var userInput = $("input#" + variable).val();
    //   $("." + variable).text(userInput);
    // });
