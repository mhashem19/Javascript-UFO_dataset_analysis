// from data.js

var tableData = data;
var tbody = d3.select("tbody");

// Display the entire dataset as default

tableData.forEach((cityReport) => {
    console.log(cityReport);
    var tableRow = tbody.append('tr');

    Object.entries(cityReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tableRow.append('td');
        cell.text(value);
    });
});
function buildTable() {
   var userDate = d3.selectAll("#datetime").property("value")
   console.log(userDate)
   var filterData = tableData.filter(obj => obj.datetime == userDate)
tbody.html("")

filterData.forEach((cityReport) => {
    console.log(cityReport);
    var tableRow = tbody.append('tr');

    Object.entries(cityReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tableRow.append('td');
        cell.text(value);
    });
});

}

d3.selectAll("#filter-btn").on("click", buildTable)


