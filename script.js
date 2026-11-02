const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.prompt-card').forEach(card => {
      card.style.display = category === 'All' || card.dataset.category === category ? '' : 'none';
    });
  });
});

document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const prompt = button.dataset.prompt;
    const notice = document.getElementById('copyNotice');
    try {
      await navigator.clipboard.writeText(prompt);
      notice.textContent = 'Prompt copied! You can paste it into your AI tool.';
    } catch (error) {
      notice.textContent = 'Copy was blocked by your browser. Please select and copy the prompt manually.';
    }
  });
});

const modal = document.getElementById('loginModal');
document.getElementById('loginBtn').addEventListener('click', () => modal.classList.add('show'));
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('show'); });
document.getElementById('demoLogin').addEventListener('click', () => {
  document.getElementById('loginMessage').textContent = 'This is a front-end preview. Secure login will be added with a backend service.';
});
