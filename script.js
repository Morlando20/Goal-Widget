let current = 0;
let goal = 100;
let goalName = 'MOVIE NIGHT';

function updateGoal(name, currentValue, goalValue) {
  goalName = name;
  current = currentValue;
  goal = goalValue;

  const nameEl = document.getElementById('goal-name');
  const progressTextEl = document.getElementById('progress-text');
  const fillEl = document.getElementById('progress-fill');
  const characterEl = document.getElementById('character');
  const progressBarEl = document.querySelector('.progress-bar');
  const completeMessageEl = document.getElementById('complete-message');
  const celebrationEl = document.getElementById('celebration');

  nameEl.textContent = goalName;
  progressTextEl.textContent = `${current}/${goal}`;

  const percent = Math.max(0, Math.min(current / goal, 1));
  fillEl.style.width = percent * 100 + '%';
  fillEl.style.borderRadius = percent >= 1 ? '15px' : '15px 0 0 15px';
  characterEl.style.left = percent * 100 + '%';

  progressBarEl.setAttribute('aria-valuenow', current);
  progressBarEl.setAttribute('aria-valuemax', goal);

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
  goalName = params.get('goal_name') || goalName;
  current = parseInt(params.get('current_value'), 10) || current;
  goal = parseInt(params.get('goal_value'), 10) || goal;

  updateGoal(goalName, current, goal);

  const incrementBtn = document.getElementById('increment-btn');
  if (incrementBtn) {
    incrementBtn.addEventListener('click', () => {
      if (current < goal) {
        updateGoal(goalName, current + 1, goal);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initGoal);

// expose globally for dynamic updates
window.updateGoal = updateGoal;
