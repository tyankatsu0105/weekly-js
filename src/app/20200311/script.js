const slot = document.getElementById('slot');
const slotItems = document.getElementsByClassName('js--slot-item');

const getRandomNumber = (range) => {
  const min = Math.ceil(range.min);
  const max = Math.floor(range.max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const range = {
  min: 0,
  max: 9
}

const createSlotNumber = (slotItem, partsOfResultNumber, length) => {
  for (let index = 0; index < length; index++) {
    const span = document.createElement('span');
    const height = slotItem.clientHeight;
    
    const randomNumber = getRandomNumber(range)
    
    if(index === 0) {      
      span.appendChild(document.createTextNode(partsOfResultNumber))
    } else {
      span.appendChild(document.createTextNode(randomNumber))
    }
    
    span.style.transform = `translateY(-${height * (length - 1)}px)`

    slotItem.appendChild(span)
  }
}

const makeSlot = (resultNumber) => {
  const resultLength = resultNumber.length;
  for (let index = 0; index < resultLength; index++) {
    const li = document.createElement('li');
    li.classList.add('slot__item', 'js--slot-item')
    slot.appendChild(li)
  }

  [...slotItems].map((slotItem, index) => {
    createSlotNumber(slotItem, resultNumber[index], 100)

    const delay = index + 1;

    Array.from(slotItem.childNodes).map(span => {
      span.style.transform = 'translateY(0px)'
      span.style.transition = `transform ${delay}s ease-in-out`
    });
  })
}

const main = () => {
  makeSlot('1000')
}

main();