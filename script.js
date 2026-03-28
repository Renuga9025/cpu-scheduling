function createTable(processes) {
    let table = "<table><tr><th>P</th><th>AT</th><th>BT</th><th>WT</th><th>TAT</th></tr>";
    processes.forEach(p => {
        table += `<tr>
        <td>${p.id}</td>
        <td>${p.at}</td>
        <td>${p.bt}</td>
        <td>${p.wt}</td>
        <td>${p.tat}</td>
        </tr>`;
    });
    table += "</table>";
    return table;
}

function getProcesses(n, priority=false){
    let arr = [];
    for(let i=0;i<n;i++){
        let at = +prompt(`P${i+1} Arrival Time`);
        let bt = +prompt(`P${i+1} Burst Time`);
        let pr = priority ? +prompt(`P${i+1} Priority`) : 0;
        arr.push({id:"P"+(i+1), at, bt, pr});
    }
    return arr;
}