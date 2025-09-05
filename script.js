function updateGoal(goalName, currentValue, goalValue) {
  const nameEl = document.getElementById('goal-name');
  const progressTextEl = document.getElementById('progress-text');
  const fillEl = document.getElementById('progress-fill');
  const characterEl = document.getElementById('character');
  const completeMessageEl = document.getElementById('complete-message');
  const celebrationEl = document.getElementById('celebration');

  nameEl.textContent = goalName;
  progressTextEl.textContent = `${currentValue}/${goalValue}`;

  const percent = Math.max(0, Math.min(currentValue / goalValue, 1));
  fillEl.style.width = percent * 100 + '%';
  characterEl.style.left = `calc(${percent * 100}% - 20px)`; // 20px = half character width

  if (percent >= 1) {
    completeMessageEl.style.display = 'block';
    celebrationEl.classList.add('show');
  } else {
    completeMessageEl.style.display = 'none';
    celebrationEl.classList.remove('show');
  }
}

// Example usage; replace with dynamic updates as needed
updateGoal('MOVIE NIGHT', 20, 100);
