const findKey = document.getElementById('findKey');
const data = document.querySelectorAll('table tr td');
console.log(data);
findKey.addEventListener('keydown',keyDetails);

function keyDetails(e){
    data[1].innerText = e.key;
    data[3].innerText = e.keyCode;
    data[5].innerText = e.shiftKey;
    data[7].innerText = e.altKey;
    data[9].innerText = e.ctrlKey;
    data[11].innerText = e.metaKey;
    console.log(e);
}