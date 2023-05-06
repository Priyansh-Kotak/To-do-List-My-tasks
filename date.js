
exports.getdate=()=>{


var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
}


exports.getday=()=>{


    var today = new Date();
    
      var options = {
        weekday: "long",
      };
    
      return today.toLocaleDateString("en-US", options);
    }



