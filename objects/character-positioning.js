function letterPositioning(str){
  var characters = str.split("");
  var charPosition = {};

  for(var i = 0; i <= characters.length - 1; i++){
    charPosition[characters[i]];
    if(charPosition[characters[i]] == undefined){
      charPosition[characters[i]] = [i];

    }
    else{
      charPosition[characters[i]].push(i);
    }

  }
  console.log(charPosition);
  return charPosition
}

letterPositioning(process.argv[2])
