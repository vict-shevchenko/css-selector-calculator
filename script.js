var
  styleSheets = document.styleSheets,
  totalStyleSheets = styleSheets.length;

for (var j = 0; j < totalStyleSheets; j++){
  var
    styleSheet = styleSheets[j],
    rules = styleSheet.cssRules,
    totalRulesInStylesheet = rules.length,
    totalSelectorsInStylesheet = 0;

  for (var i = 0; i < totalRulesInStylesheet; i++) {
    if (rules[i].selectorText){
      totalSelectorsInStylesheet += rules[i].selectorText.split(',').length;
    }
  }
  console.log("Stylesheet: "+styleSheet.href);
  console.log("Total rules: "+totalRulesInStylesheet);
  console.log("Total selectors: "+totalSelectorsInStylesheet);
}