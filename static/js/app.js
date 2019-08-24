// define "debug" function--throws audit msgs to browser console
function debug(strMsg, thing){
	console.log(`${intDebugCount++}) ${strMsg}`);
	if(thing!==undefined){console.log(thing);}
}

// from data.js. Let's use LETs instead of VARs.
let intDebugCount = 1;
debug("declared variables");

// YOUR CODE HERE!
// declare variable for the "Filter Table" button
let btnFilter = d3.select("#filter-btn");
debug("captured Filter button");

// declare handler for the "Filter Table" button
btnFilter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inpDatetime = d3.select("#datetime");
  let inpCity     = d3.select("#city");
  let inpState    = d3.select("#state");
  let inpCountry  = d3.select("#country");
  let inpShape    = d3.select("#shape");
  debug("captured inputboxes");

  // Get the value property of the input element
  let dat        = Date.parse(inpDatetime.property("value"));
  let strCity    = inpCity.property("value").toLowerCase();
  let strState   = inpState.property("value").toLowerCase();
  let strCountry = inpCountry.property("value").toLowerCase();
  let strShape   = inpShape.property("value").toLowerCase();
  debug("captured criteria");

  // Use the form input to filter by form data
  let arrMatch = data;
  if(dat > 0)           {arrMatch = arrMatch.filter(itm=>Date.parse(itm.datetime)===dat);}
  if(strCity !== "")    {arrMatch = arrMatch.filter(itm=>itm.city==strCity);}
  if(strState !== "")   {arrMatch = arrMatch.filter(itm=>itm.state==strState);}
  if(strCountry !== "") {arrMatch = arrMatch.filter(itm=>itm.country==strCountry);}
  if(strShape !== "")   {arrMatch = arrMatch.filter(itm=>itm.shape==strShape);}
  debug("created filtered array", arrMatch);
  let tbodCurr = document.getElementById("ufo-table-body");
  let tbodBlank = document.createElement("tbody");
  tbodCurr.parentNode.replaceChild(tbodBlank, tbodCurr);
  tbodBlank.id = "ufo-table-body";
  debug("cleared tbod contents", tbodBlank);
  let tbod = d3.select("#ufo-table").select("tbody");
  arrMatch.map(itm=>
  {
	  let tr = tbod.append("tr");
	  tr.append("td").text(itm.datetime);
	  tr.append("td").text(itm.city);
	  tr.append("td").text(itm.state);
	  tr.append("td").text(itm.country);
	  tr.append("td").text(itm.shape);
	  tr.append("td").text(itm.durationMinutes);
	  tr.append("td").text(itm.comments);
      debug(`added table row ${itm}`, tr);
  });
});