function countLetters(str){
  var characters = str.split("");
  var charCounter = {};

  for(var i = 0; i <= characters.length - 1; i++){

    if(charCounter[characters[i]] == undefined){
      charCounter[characters[i]] = [i];
      //if(charCounter doesn't have the character)
      //-> create a new property
    }
    else{      //else -> find that prop, and update(incr by 1)
      charCounter[characters[i]].push(i);
    }
  }
  console.log(charCounter);
  return charCounter
}

countLetters(process.argv[2])
