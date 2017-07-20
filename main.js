var terms = {
  first: ["Butterface", "Communist", "Creepy", "Democrat", "Dicknose", "Drug-Loving", "Elitist", "Goat", "Idiotic", "Insecure", "Lazy", "Pie-Eating", "Pompous", "Racist", "Slimy", "Slutty", "Smelly", "Stupid", "Tone Deaf", "Ugly", "White Trash"],
  second: ["Ass", "Ball", "Bitch", "Boner", "Butt", "Cock", "Crotch", "Dick", "Douche", "Fuck", "Nut", "Prick", "Rectum", "Shart", "Shit", "Slut", "Sperm", "Sphincter", "Taint", "Turd", "Twat"],
  third: ["Bag", "Balloon", "Biscuit", "Blossom", "Box", "Canoe", "Captain", "Clown", "Dragon", "Goblin", "Hammer", "Hound", "Jockey", "Knob", "Monster", "Nazi", "Pilot", "Pirate", "Socket", "Sucker", "Waffle"]
};

function selectTerm(ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

function generateInsult() {
  // get pieces
  var first =  selectTerm(terms.first);
  var second =  selectTerm(terms.second);
  var third =  selectTerm(terms.third);

  // replace with a synonym
  lookupReplaceSynonym(first, 'first');
  lookupReplaceSynonym(second, 'second');
  lookupReplaceSynonym(third, 'third');

  return first + " " + second + " " + third + "!";
}

function lookupReplaceSynonym(term, order) {
  $.ajax({
    url: "https://api.datamuse.com/words?rel_syn=" + term,
    dataType: "json",
    success: successHandler.bind(null, term, order),
    error: errorHandler
  });
}

function successHandler(term, order, res){
  if(res && res.length){
    var chosen = selectTerm(res).word.toUpperCase();
    var index = terms[order].indexOf(term);
    terms[order][index] = chosen;
    console.log("replaced " + term + " with " + chosen);
  }
}

function errorHandler(err){
  console.error(err);
}