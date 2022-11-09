import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
feedbackFormEl.addEventListener('input', throttle(onFeedbackCatcher, 500));
feedbackFormEl.addEventListener('submit', onSubmit);

const userData = {};
updateUserData();

function onFeedbackCatcher() {
  userData.email = feedbackFormEl.elements.email.value;
  userData.message = feedbackFormEl.elements.message.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));
}

function onSubmit(e) {
  e.preventDefault();
  if (
    feedbackFormEl.elements.email.value &&
    feedbackFormEl.elements.message.value
  ) {
    console.log(userData);

    e.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_KEY);
  }
}

function updateUserData() {
  if (localStorage.getItem(FEEDBACK_KEY)) {
    const userData = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '');
    feedbackFormEl.elements.email.value = userData.email;
    feedbackFormEl.elements.message.value = userData.message;
  }
}

