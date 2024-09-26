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

// square block
const squareCounter = () => {
  const parent = document.querySelector('.form-item__square');

  if (parent) {
    const btnDec = document.querySelector(
      '.form-item--rooms [data-action="decrement"]'
    );
    const btnInc = document.querySelector(
      '.form-item--rooms [data-action="increment"]'
    );
    const val = document.querySelector('[data-counter="value"]');
    const squareVal = document.querySelector(
      '.form-item__square .form-item__text span'
    );
    const btnDecSquare = document.querySelector(
      '.form-item__square [data-action="decrement"]'
    );
    const btnIncSquare = document.querySelector(
      '.form-item__square [data-action="increment"]'
    );
    const squareButtonValue = document.querySelector(
      '.form-item__square > button > p span'
    );

    const isClicable = true;

    let counter = val.attributes.min.value;
    btnDec.addEventListener('click', () => {
      if (counter > 1) {
        counter--;
        val.value = counter;

        switch (Number(val.value)) {
          case 1:
            squareVal.textContent = '40';
            squareButtonValue.textContent = '60';
            break;
          case 2:
            squareVal.textContent = '60';
            squareButtonValue.textContent = '75';
            break;
          case 3:
            squareVal.textContent = '75';
            squareButtonValue.textContent = '95';
            break;
          case 4:
            squareVal.textContent = '95';
            squareButtonValue.textContent = '110';
            break;
          case 5:
            squareVal.textContent = '110';
            squareButtonValue.textContent = '110';
            break;
          default:
            break;
        }

        document.querySelector(
          '.types .form-item__square > button > p'
        ).hidden = false;
      }
      if (val.value < val.attributes.max.value) {
        btnInc.disabled = false;
      }
    });

    btnInc.addEventListener('click', () => {
      if (val.value <= val.attributes.max.value) {
        counter++;
        val.value = counter;
        switch (Number(val.value)) {
          case 1:
            squareVal.textContent = '40';
            squareButtonValue.textContent = '60';
            break;
          case 2:
            squareVal.textContent = '60';
            squareButtonValue.textContent = '75';
            break;
          case 3:
            squareVal.textContent = '75';
            squareButtonValue.textContent = '95';
            break;
          case 4:
            squareVal.textContent = '95';
            squareButtonValue.textContent = '110';

            break;
          case 5:
            squareVal.textContent = '110';
            document.querySelector(
              '.types .form-item__square > button > p'
            ).hidden = true;
            break;
          default:
            break;
        }
      } else {
        // btn disabled
        btnInc.disabled = true;
      }
    });

    if (isClicable) {
      btnDecSquare.disabled = true;

      btnIncSquare.addEventListener('click', () => {
        squareVal.textContent = squareButtonValue.textContent;
        document.querySelector(
          '.types .form-item__square > button > p'
        ).hidden = true;
        btnDecSquare.disabled = false;
        btnIncSquare.disabled = true;
      });

      btnDecSquare.addEventListener('click', () => {
        switch (Number(val.value)) {
          case 1:
            squareVal.textContent = '40';
            break;
          case 2:
            squareVal.textContent = '60';
            break;
          case 3:
            squareVal.textContent = '75';
            break;
          case 4:
            squareVal.textContent = '95';

            break;
          case 5:
            squareVal.textContent = '110';
            break;
          default:
            break;
        }

        document.querySelector(
          '.types .form-item__square > button > p'
        ).hidden = false;
        btnIncSquare.disabled = false;
      });
    }
  }

  return false;
};
squareCounter();

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

// Go to page
const goPage = (button, page) => {
  const btn = document.querySelector(button);

  if (btn) {
    btn.addEventListener('click', () => {
      window.location.replace(page);
    });
  }
};

goPage('.menu__item__home', '/');
goPage('.menu__item__profile', '/html/pages/login.html');
goPage('.menu__item__account', '/html/pages/user-account.html');
goPage('.menu__item__orders', '/html/pages/user-orders.html');
goPage('.menu__item__cards', '/html/pages/user-cards.html');
goPage('.menu__item__addresses', '/html/pages/user-locations.html');
goPage('.menu__item__payments', '/html/pages/cleaner/payouts.html');
goPage('.menu__cleaner__orders', '/html/pages/cleaner/my-orders.html');
goPage('.menu__item__dayoffs', '/html/pages/cleaner/dayoffs.html');
goPage(
  '.menu__item__cleaner__profile',
  '/html/pages/cleaner/account-menu.html'
);

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

// Mobile menu
const mobileMenu = () => {
  const menuBtn = document.querySelector('.menu--mobile__button');
  const closeBtn = document.querySelector('.menu--mobile--open > button');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.querySelector('.menu--mobile').classList.toggle('hidden');
      document.querySelector('.menu--mobile--open').classList.toggle('hidden');
      document.querySelector('body').classList.toggle('no-scroll');
    });

    closeBtn.addEventListener('click', () => {
      document.querySelector('.menu--mobile').classList.toggle('hidden');
      document.querySelector('.menu--mobile--open').classList.toggle('hidden');
    });
  }
};
mobileMenu();

const openDialog = (dialog, showButton, closeButton) => {
  const dialogSection = document.querySelector(dialog);
  const showBtn = document.querySelector(showButton);
  const closeBtn = document.querySelectorAll(closeButton);

  if (dialogSection) {
    // "Show the dialog" button opens the dialog modally
    showBtn.addEventListener('click', () => {
      dialogSection.showModal();
    });

    // "Close" button closes the dialog
    closeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        dialogSection.close();
      });
    });
  }
};
openDialog(
  '.dialog--city',
  '.section--address__header__item .button--open',
  '.dialog--city .dialog__inner .button'
);
openDialog(
  '.dialog--calendar',
  '.section--date-time .form-item__date',
  '.dialog--calendar .section--calendar__day'
);
openDialog(
  '.dialog--time',
  '.section--date-time .form-item__time',
  '.dialog--time .dialog--time__items > p'
);
openDialog(
  '.dialog--nonstandart',
  '.types .types__item__modal',
  '.dialog--nonstandart .dialog__close'
);

const openCleanerOrders = () => {
  const cleanerOrders = document.querySelector(
    '.cleaner-order .section--cleaner-items'
  );

  const calendarDays = document.querySelectorAll('.section--calendar__day');

  const calendarDayOrders = document.querySelectorAll(
    '.section--calendar__day.orders'
  );

  if (cleanerOrders) {
    calendarDays.forEach((element) => {
      element.addEventListener('click', () => {
        cleanerOrders.classList.add('hidden');
      });
    });

    calendarDayOrders.forEach((element) => {
      element.addEventListener('click', () => {
        cleanerOrders.classList.remove('hidden');
      });
    });
  }
};
openCleanerOrders();

const pointerScroll = (elem) => {
  const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
  const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
  const drag = (ev) =>
    elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

  elem.addEventListener('pointerdown', dragStart);
  elem.addEventListener('pointerup', dragEnd);
  elem.addEventListener('pointermove', drag);
};
document.querySelectorAll('.services .wrapper').forEach(pointerScroll);

const changeBackgroundPositionOnscroll = () => {
  const body = document.querySelector('body');
  if (body) {
    window.onscroll = () => {
      body.style.backgroundPosition = `0px ${window.scrollY / 2}px`;
    };
  }
};
changeBackgroundPositionOnscroll();
