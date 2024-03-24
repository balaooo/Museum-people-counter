const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
const countList = document.getElementById("the-table-i-want");
const accumulateCountPlaceholder = document.getElementById("accumulate-count");
const saveBtn = document.getElementById("save-btn");
const increaseBtn = document.getElementById("increase-btn");
let eachCount = 0;
let accumulateCount = 0;

const allData = [];


increaseBtn.addEventListener('click', ()=>{
    eachCount += 1;
    countEl.innerText = eachCount;
});


saveBtn.addEventListener('click', ()=>{
    let countStr = `最近一次儲存人數${eachCount}人`;
    saveEl.textContent = countStr;
    countEl.textContent = 0;
    const submitTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    

    //建立人數＆時間戳記資料，並存到陣列當中
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
    
    //將儲存資料加總，並清空每次資料
    accumulateCount += eachCount;
    accumulateCountPlaceholder.innerText = accumulateCount;
    eachCount = 0;
});

