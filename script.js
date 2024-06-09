// Load and display attendance history
d3.csv("attendance_history.csv").then(data => {
    generateTable("#attendance-table", data);
}).catch(error => console.error("Error loading attendance history:", error));

// Function to generate a table
function generateTable(selector, data) {
    var table = d3.select(selector).append("table");
    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // Append header row
    thead.append("tr").selectAll("th")
        .data(d3.keys(data[0]))
        .enter().append("th")
        .text(d => d);

    // Append data rows
    tbody.selectAll("tr")
        .data(data)
        .enter().append("tr")
        .selectAll("td")
        .data(row => d3.values(row))
        .enter().append("td")
        .text(d => d);
}