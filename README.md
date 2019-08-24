# BootCampHomework11-2019-08-24

[JavaScript](https://github.com/ekenigsberg/BootCampHomework11-2019-08-24/blob/master/static/js/app.js) and [HTML Solution](https://github.com/ekenigsberg/BootCampHomework11-2019-08-24/blob/master/index.html)<br/>
to<br/>
[Data Analytics Boot Camp Homework #11](https://github.com/the-Coding-Boot-Camp-at-UT/UTAMCB201904DATA3/blob/master/14-Intro-To-JavaScript/Homework/Instructions/README.md)

# Screenshots: UFO Finder App
![Screenshot](https://github.com/ekenigsberg/BootCampHomework11-2019-08-24/blob/master/static/images/screenshot.png)

# Technical Insights

* Added a simple debug() function which provides oodles of Console feedback.
* Getting the table to refresh with the right data took a little fiddling.
  * Took me awhile to understand why filters seemed additive (ORs instead of ANDs? wha?). They weren't! I just was failing to clear out the previous HTML before adding new rows. I got pwned.
  * I used [this solution](https://stackoverflow.com/a/7271547/8422614) from StackOverflow. It gets praise because it doesn't clear out rows, it just slams a blank table into place.
  * There's some weirdness between what can be done with `document.` calls and `d3.` calls\-\-I'm sure I'll screw that up somewhere in the near future.
* Kept the basic original page but messed with Bootstrap a smidge.
  * Replaced the [Superhero](https://bootswatch.com/3/superhero/) Bootswatch with [Spacelab](https://bootswatch.com/3/spacelab/), which is imo better for displaying the form and table.
  * Right-aligned the submit button and made it bigger.
  * Got a better background image for classic arcade nerds.
