fetch("http://ergast.com/api/f1/current.json")
.then((data) => {
    // console.log(data);
    return data.json();
})
.then((objectData) => {
    console.log(objectData);
    let raceTable = objectData.MRData.RaceTable.Races;
    console.log(raceTable);
    let tableData = "";
    raceTable.map((values) => {
        tableData += `<tr>
        <td>${values.round}</td>
        <td>${values.raceName}</td>
        <td>${values.date}</td>
        <td>${values.time}</td>
        <td>${values.Circuit.circuitName}</td>
        <td><a href="${values.url}">Circuit Info</a>
        </tr>`;
    })
    document.getElementById("table_body").innerHTML = tableData;
})