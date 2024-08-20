const tabs = () => {
  const tabs = document.querySelector('.tab-wrap');
  const tabButton = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab__content');

  tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      contents.forEach((content) => {
        content.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
};

tabs();
