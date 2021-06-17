// from data.js
var tableData = data;

// YOUR CODE HERE!

// table, where data will be appended into
var tbody = d3.select("#target-table-display");

// submit buttons & input field
var submitButton = d3.select("#filter-btn-date");
var inputFieldDate = d3.select("#datetime");
// city 
var cityButton = d3.select("#filter-btn-city");
var inputFieldCity = d3.select("#cityname");
// state 
var stateButton = d3.select("#filter-btn-state");
var inputFieldState = d3.select("#statename");
// country 
var countryButton = d3.select("#filter-btn-country");
var inputFieldCountry = d3.select("#countryname");
// shape 
var shapeButton = d3.select("#filter-btn-shape");
var inputFieldShape = d3.select("#shapename");


// Create table structure in the html file and insert each "data" object
data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
});

// implementing fuction to "submit button"
submitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    
    console.log("You have clicked 'DateTime Button'.");
    // select the "input element" and get the raw html node
    var inputField = d3.select("#datetime");
    // get the value property of the "input" element 
    var inputElement = inputField.property("value");
    
    console.log(inputElement);
    // use the "field input" to filter the data by "date" only
    var inputTypeArray = data.filter(one => one.datetime === inputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(inputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    inputTypeArray.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            // adds the "value" to each row in the table
            cell.text(value);
        });
    });      
});
