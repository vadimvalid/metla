// form inputs button decrement and increment
function inputCounter(block) {
  const parent = document.querySelector(block);
  const btnDec = parent.querySelector('[data-action="decrement"]');
  const btnInc = parent.querySelector('[data-action="increment"]');
  const val = parent.querySelector('[data-counter="value"]');

  let counter = 1;
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
    if (val.value < val.attributes.max.value) {
      counter++;
      val.value = counter;
    } else {
      // btn disabled
      btnInc.disabled = true;
    }
  });
}

inputCounter('.form-item--rooms');
inputCounter('.form-item--sanuzel');

// form square block
const selectActiveButton = (block) => {
  const parent = document.querySelector(block);
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
};

selectActiveButton('.form-item__square');
