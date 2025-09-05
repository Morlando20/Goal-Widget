function updateGoal(goalName, currentValue, goalValue) {
  const nameEl = document.getElementById('goal-name');
  const progressTextEl = document.getElementById('progress-text');
  const fillEl = document.getElementById('progress-fill');
  const characterEl = document.getElementById('character');
  const progressBarEl = document.querySelector('.progress-bar');
  const completeMessageEl = document.getElementById('complete-message');
  const celebrationEl = document.getElementById('celebration');

  nameEl.textContent = goalName;
  progressTextEl.textContent = `${currentValue}/${goalValue}`;

  const percent = Math.max(0, Math.min(currentValue / goalValue, 1));
  fillEl.style.width = percent * 100 + '%';
  fillEl.style.borderRadius = percent >= 1 ? '15px' : '15px 0 0 15px';
  characterEl.style.left = percent * 100 + '%';

  progressBarEl.setAttribute('aria-valuenow', currentValue);
  progressBarEl.setAttribute('aria-valuemax', goalValue);

  if (percent >= 1) {
    completeMessageEl.style.display = 'block';
    celebrationEl.classList.add('show');
  } else {
    completeMessageEl.style.display = 'none';
    celebrationEl.classList.remove('show');
  }
}

function initGoal() {
  const params = new URLSearchParams(window.location.search);
  const goalName = params.get('goal_name') || 'MOVIE NIGHT';
  const current = parseInt(params.get('current_value'), 10) || 0;
  const goal = parseInt(params.get('goal_value'), 10) || 100;

  updateGoal(goalName, current, goal);
}

document.addEventListener('DOMContentLoaded', initGoal);

// expose globally for dynamic updates
window.updateGoal = updateGoal;
