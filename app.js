const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

let tasks = []; 


addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return alert('matn kiriting!');
  const task = { id: Date.now(), text };
  tasks.push(task);
  input.value = '';
  renderTasks();
});


function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="edit" data-id="${task.id}">update</button>
        <button class="delete" data-id="${task.id}">delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}


taskList.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (!id) return;



  if (e.target.classList.contains('delete')) {
    tasks = tasks.filter(t => t.id != id);
    renderTasks();
  }




  if (e.target.classList.contains('edit')) {
    const newText = prompt("Yangi matn kiriting:");
    if (newText) {
      tasks = tasks.map(t => t.id == id ? { ...t, text: newText } : t);
      renderTasks();
    }
  }
});
