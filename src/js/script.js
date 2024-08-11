const openDialog = () => {
  const dialog = document.getElementById('dialog');
  dialog.showModal();
};

const closeDialog = () => {
  const dialog = document.getElementById('dialog');
  dialog.close();
};

const getAppPopup = (e) => {
  const button = document.querySelector('.section--app .open-popup');
  const buttonClose = document.querySelector('.dialog__close');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    openDialog();
  });

  buttonClose.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog();
  });
};

const selectItem = (items) => {
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (item.classList.contains('active')) return;
      items.forEach((item) => {
        item.classList.remove('active');
      });
      e.target.classList.toggle('active');
    });
  });
};

const checkMethod = () => {
  const methods = document.querySelectorAll('.method');
  if (methods.length) {
    selectItem(methods);
  }
};

getAppPopup();
checkMethod();
