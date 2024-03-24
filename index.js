const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
let eachCount = 0;
const countList = document.getElementById("the-table-i-want");
console.log(countList);
console.log(countEl);


const allData = [];



function increaseCount() {
    eachCount += 1;
    countEl.innerText = eachCount;
}

function save() {
    let countStr = `最近一次儲存人數${eachCount}人`;
    saveEl.textContent = countStr;
    countEl.textContent = 0;
    const submitTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    

    //建立人數＆時間戳記資料
    const savedData = {
        time: submitTime,
        count: eachCount
    };
    

    allData.push(savedData);

    //每次儲存就渲染到下方的list上
    countList.innerHTML += `
        <tr>
        <td>${savedData.time}</td>
        <td>${savedData.count}</td>
        </tr>
    `;
    
    eachCount = 0;
}

