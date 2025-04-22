const task3Element = document.getElementById('task-3');


function justAlert() {
    alert("Just alert!");
}
// justAlert();

function receiveName(name) {
    alert(`Alert from ${name}`);
}
// receiveName('Pesho');

task3Element.addEventListener('click', justAlert)

function fourtFn(str1, str2, str3) {
    alert(str1 + str2 + str3);
}
fourtFn('Hey, ', 'what\'s ' , 'up?');