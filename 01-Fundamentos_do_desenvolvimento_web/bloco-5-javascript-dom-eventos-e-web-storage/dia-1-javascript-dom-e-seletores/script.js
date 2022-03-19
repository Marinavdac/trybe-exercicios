const container = document.getElementById('container');
container.style.background = '#f3f3f3';

const header = document.getElementById('header-container');
header.style.background = '#00b069';

const urgentTasks = document.querySelector('.emergency-tasks');
urgentTasks.style.background = '#ff9f84';
const h3Titles = urgentTasks.querySelectorAll('h3');
for (let taskHeaders of h3Titles) {
    taskHeaders.style.background = '#947cee';
}

const top3 = document.getElementById('top3');

const newTask = document.createElement('h4');
top3.appendChild(newTask);
newTask.innerText = "Finalizar Projeto";
newTask.style.color = "white";

const NonUrgentTasks = document.querySelector('.no-emergency-tasks');
NonUrgentTasks.style.background = '#f9db5e';
const subtitles = NonUrgentTasks.querySelectorAll('h3');
for (let headers of subtitles) {
    headers.style.background = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.background = '#003533';