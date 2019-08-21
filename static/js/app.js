// define "debug" function--throws audit msgs to browser console
function debug(strMsg, thing){
	console.log(`${intDebugCount++}) ${strMsg}`);
	if(thing!==undefined){console.log(thing);}
}

// from data.js. Let's use LETs instead of VARs.
let arrData = data;
let intDebugCount = 1;
debug("declared variables", arrData);

// YOUR CODE HERE!
// declare variable for the "Filter Table" button
let btnFilter = d3.select("#filter-btn");
debug("captured Filter button");

// declare handler for the "Filter Table" button
btnFilter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inpDT = d3.select("#datetime");
  debug("captured Enter a Date inputbox");

  // Get the value property of the input element
  let datIn = Date.parse(inpDT.property("value"));
  debug("captured entered date", datIn);

  // Use the form input to filter the data by blood type
  let arrMatch = arrData.filter(itm=>Date.parse(itm.datetime)===datIn);
  debug("created filtered array", arrMatch);
  let tbod = d3.select("#ufo-table").select("tbody");
  debug("captured table body tag", tbod);
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
      debug(`added table row ${itm.}`, tr);
  });

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//  let arrAge = arrMatch.map(itm=>parseInt(itm.age));
//  d3.select(".summary").append("li").text(`Average Age: ${parseInt(math.mean(arrAge))}`);

  // Finally, add the summary stats to the `ul` tag
});
