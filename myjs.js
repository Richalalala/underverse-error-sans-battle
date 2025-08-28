document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btn = document.getElementById('toggleBtn');

  btn.addEventListener('click', () => {

    if (body.classList.contains('light')) {
      body.classList.replace('light', 'dark');
      btn.innerText = 'Light mode';
    } else {
      body.classList.replace('dark', 'light');
      btn.innerText = 'Dark mode';
    }
  });
});