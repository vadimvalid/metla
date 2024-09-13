// form inputs button decrement and increment
const inputCounter = (block) => {
  const parent = document.querySelector(block);

  if (parent) {
    const btnDec = parent.querySelector('[data-action="decrement"]');
    const btnInc = parent.querySelector('[data-action="increment"]');
    const val = parent.querySelector('[data-counter="value"]');

    let counter = val.attributes.min.value;
    btnDec.addEventListener('click', () => {
      if (counter > 1) {
        counter--;
        val.value = counter;
      }
      if (val.value < val.attributes.max.value) {
        btnInc.disabled = false;
      }
    });
    btnInc.addEventListener('click', () => {
      if (Number(val.value) < Number(val.attributes.max.value)) {
        counter++;
        val.value = counter;
      } else {
        // btn disabled
        btnInc.disabled = true;
      }
    });
  }

  return false;
};

inputCounter('.form-item--rooms');
inputCounter('.form-item--sanuzel');
inputCounter('.form-item--meter');
inputCounter('.form-item--window');

// form square block
const selectActiveButton = (block) => {
  const parent = document.querySelector(block);

  if (parent) {
    const button = parent.querySelectorAll('button');

    button.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add('active');
        button.forEach((el) => {
          if (el !== element) {
            el.classList.remove('active');
          }
        });
      });
    });
  }

  return false;
};

// select types item
const selectTypesItem = (block) => {
  const parent = document.querySelector(block);

  if (parent) {
    const items = parent.querySelectorAll('.types__item');

    items.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add('active');
        items.forEach((el) => {
          if (el !== element) {
            el.classList.remove('active');
          }
        });
      });
    });
  }

  return false;
};

const selectOrderTypesItem = (block) => {
  const parent = document.querySelector(block);

  if (parent) {
    const items = parent.querySelectorAll('.types__item');

    items.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add('active');
        items.forEach((el) => {
          if (el !== element) {
            el.classList.remove('active');
          }
        });
      });
    });
  }

  return false;
};

const selectPaymentItem = (block) => {
  const parent = document.querySelector(block);

  if (parent) {
    const items = parent.querySelectorAll('.payment-item');

    items.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add('active');
        items.forEach((el) => {
          if (el !== element) {
            el.classList.remove('active');
          }
        });
      });
    });
  }

  return false;
};

const selectCards = (cards) => {
  const elements = document.querySelectorAll(cards);

  elements.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.add('active');
      elements.forEach((el) => {
        if (el !== element) {
          el.classList.remove('active');
        }
      });
    });
  });
};

selectActiveButton('.form-item__square');
selectTypesItem('.types .wrapper');
selectOrderTypesItem('.types__pollution');
selectPaymentItem('.section--result__methods');
selectCards('.card--premium');

// Back button
const backBtn = () => {
  const back = document.querySelector('.menu__item__back');
  if (back) {
    back.addEventListener('click', () => {
      history.back();
    });
  }
};
backBtn();

// Go to home
const goHome = () => {
  const home = document.querySelector('.menu__item__home');
  if (home) {
    home.addEventListener('click', () => {
      window.location.replace('/');
    });
  }
};
goHome();

// Go to pages
const goProfile = () => {
  const profile = document.querySelector('.menu__item__profile');
  if (profile) {
    profile.addEventListener('click', () => {
      window.location.replace('/html/pages/login.html');
    });
  }
};
const goAccount = () => {
  const profile = document.querySelector('.menu__item__account');
  if (profile) {
    profile.addEventListener('click', () => {
      window.location.replace('/html/pages/user-account.html');
    });
  }
};
const goOrders = () => {
  const profile = document.querySelector('.menu__item__orders');
  if (profile) {
    profile.addEventListener('click', () => {
      window.location.replace('/html/pages/user-orders.html');
    });
  }
};
const goCards = () => {
  const profile = document.querySelector('.menu__item__cards');
  if (profile) {
    profile.addEventListener('click', () => {
      window.location.replace('/html/pages/user-cards.html');
    });
  }
};
const goAddresses = () => {
  const profile = document.querySelector('.menu__item__addresses');
  if (profile) {
    profile.addEventListener('click', () => {
      window.location.replace('/html/pages/user-locations.html');
    });
  }
};
goProfile();
goAccount();
goOrders();
goCards();
goAddresses();

// Open menu contact block
const menuContact = () => {
  const contact = document.querySelector('.menu__item__contact');
  const closeBtn = document.querySelector('.menu__contact__head button');
  if (contact) {
    contact.addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('menu--contact');
    });

    closeBtn.addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('menu--contact');
    });
  }
};
menuContact();

// Open menu block
const menu = () => {
  const menuBtn = document.querySelector('.menu__item__menu');
  const closeBtn = document.querySelector('.menu__desktop .wrapper > button');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('hidden');
      document.querySelector('.menu__desktop').classList.toggle('visible');
    });

    closeBtn.addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('hidden');
      document.querySelector('.menu__desktop').classList.remove('visible');
    });
  }
};
menu();
