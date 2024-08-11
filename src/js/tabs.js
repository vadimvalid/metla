const tabs = () => {
  const tabs = document.querySelector('.tab-wrap');
  const tabButton = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab__content');
  const moreButton = document.querySelectorAll('.tab__content__more');
  const hiddenContent = document.querySelectorAll('.tab__content .hidden');

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

  moreButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Roll up';
      btn.classList.toggle('active');
      hiddenContent.forEach((content) => {
        content.classList.toggle('hidden');
      });
    });
  });
};

tabs();
