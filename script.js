  function updateDateTime() {
    const now = new Date();
    document.getElementById('current-date').textContent = now.toLocaleString();
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('bg-gray-50')) {
      body.classList.replace('bg-gray-50', 'bg-gray-800');
    } else {
      body.classList.replace('bg-gray-800', 'bg-gray-50');
    }
  });

  const completeButtons = document.querySelectorAll('.complete-btn');
  completeButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (this.classList.contains('completed')) return;
      const checkCountElem = document.getElementById('check-count');
      let currentCount = parseInt(checkCountElem.textContent, 10);
      checkCountElem.textContent = currentCount + 1;

      const taskAssignedElem = document.getElementById('task-assigned');
      let taskCount = parseInt(taskAssignedElem.textContent, 10);
      taskAssignedElem.textContent = Math.max(taskCount - 1, 0);

      this.classList.remove('bg-green-100', 'text-green-600');
      this.classList.add('bg-gray-300', 'text-gray-600', 'completed');
      this.textContent = "Completed";

      const li = document.createElement('li');
      li.innerHTML = `You have completed the task <strong>${this.getAttribute('data-task-title')}</strong> at ${new Date().toLocaleString()}.`;
      document.getElementById('activity-log').appendChild(li);
    });
  });

  document.getElementById('clear-activity').addEventListener('click', () => {
    document.getElementById('activity-log').innerHTML = "";
  });