const body = document.getElementById('body')
body.insertAdjacentHTML(
  'beforeend',
  '<div class="centralizer"><h1 class="title">RSS Виртуальная клавиатура</h1><textarea class="body--textarea textarea" id="textarea" rows="5" cols="50" spellcheck="false"></textarea><p class="description">Клавиатура создана в операционной системе Windows</p><p class="language">Для переключения языка комбинация: левыe ctrl + alt</p></div>',
)
const centralizer = document.querySelector('.centralizer')
centralizer.insertAdjacentHTML(
  'beforeend',
  '<div class="body--keyboard keyboard" id="keyboard"></div>',
)
const keyboard = document.querySelector('.keyboard')
keyboard.insertAdjacentHTML(
  'beforeend',
  '<div class="keyboard--row row">  <div class="keyboard--key key Backquote"><span class="rus"><span class="caseDown">ё</span></span></div><div class="keyboard--key key Digit1"><span class="rus"><span class="caseDown">1</span></span></div><div class="keyboard--key key Digit2"><span class="rus"><span class="caseDown">2</span></span></div><div class="keyboard--key key Digit3"><span class="rus"><span class="caseDown">3</span></span></div><div class="keyboard--key key Digit4"><span class="rus"><span class="caseDown">4</span></span></div><div class="keyboard--key key Digit5"><span class="rus"><span class="caseDown">5</span></span></div><div class="keyboard--key key Digit6"><span class="rus"><span class="caseDown">6</span></span></div><div class="keyboard--key key Digit7"><span class="rus"><span class="caseDown">7</span></span></div><div class="keyboard--key key Digit8"><span class="rus"><span class="caseDown">8</span></span></div><div class="keyboard--key key Digit9"><span class="rus"><span class="caseDown">9</span></span></div><div class="keyboard--key key Digit0"><span class="rus"><span class="caseDown">0</span></span></div><div class="keyboard--key key Minus"><span class="rus"><span class="caseDown">-</span></span></div><div class="keyboard--key key Equal"><span class="rus"><span class="caseDown">=</span></span></div><div class="keyboard--key key Backspace"><span class="rus"><span class="caseDown">Backspace</span></span></div></div>',
)
keyboard.insertAdjacentHTML(
  'beforeend',
  '<div class="keyboard--row row"><div class="keyboard--key key Tab"><span class="rus"><span class="caseDown">Tab</span></span></div><div class="keyboard--key key KeyQ"><span class="rus"><span class="caseDown">й</span></span></div><div class="keyboard--key key KeyW"><span class="rus"><span class="caseDown">ц</span></span></div><div class="keyboard--key key KeyE"><span class="rus"><span class="caseDown">у</span></span></div><div class="keyboard--key key KeyR"><span class="rus"><span class="caseDown">к</span></span></div><div class="keyboard--key key KeyT"><span class="rus"><span class="caseDown">е</span></span></div><div class="keyboard--key key KeyY"><span class="rus"><span class="caseDown">н</span></span></div><div class="keyboard--key key KeyU"><span class="rus"><span class="caseDown">г</span></span></div><div class="keyboard--key key KeyI"><span class="rus"><span class="caseDown">ш</span></span></div><div class="keyboard--key key KeyO"><span class="rus"><span class="caseDown">щ</span></span></div><div class="keyboard--key key KeyP"><span class="rus"><span class="caseDown">з</span></span></div><div class="keyboard--key key BracketLeft"><span class="rus"><span class="caseDown">х</span></span></div><div class="keyboard--key key BracketRight"><span class="rus"><span class="caseDown">ъ</span></span></div><div class="keyboard--key key Backslash">&#92;<span class="rus"><span class="caseDown"></span></span></div><div class="keyboard--key key Delete"><span class="rus"><span class="caseDown">Del</span></span></div></div>',
)
keyboard.insertAdjacentHTML(
  'beforeend',
  '<div class="keyboard--row row"><div class="keyboard--key key CapsLock"><span class="rus"><span class="caseDown">CapsLock</span></span></div><div class="keyboard--key key KeyA"><span class="rus"><span class="caseDown">ф</span></span></div><div class="keyboard--key key KeyS"><span class="rus"><span class="caseDown">ы</span></span></div><div class="keyboard--key key KeyD"><span class="rus"><span class="caseDown">в</span></span></div><div class="keyboard--key key KeyF"><span class="rus"><span class="caseDown">а</span></span></div><div class="keyboard--key key KeyG"><span class="rus"><span class="caseDown">п</span></span></div><div class="keyboard--key key KeyH"><span class="rus"><span class="caseDown">р</span></span></div><div class="keyboard--key key KeyJ"><span class="rus"><span class="caseDown">о</span></span></div><div class="keyboard--key key KeyK"><span class="rus"><span class="caseDown">л</span></span></div><div class="keyboard--key key KeyL"><span class="rus"><span class="caseDown">д</span></span></div><div class="keyboard--key key Semicolon"><span class="rus"><span class="caseDown">ж</span></span></div><div class="keyboard--key key Quote"><span class="rus"><span class="caseDown">э</span></span></div><div class="keyboard--key key Enter"><span class="rus"><span class="caseDown">Enter</span></span></div>        </div>',
)
keyboard.insertAdjacentHTML(
  'beforeend',
  '<div class="keyboard--row row"><div class="keyboard--key key ShiftLeft"><span class="rus"><span class="caseDown">Shift</span></span></div><div class="keyboard--key key KeyZ"><span class="rus"><span class="caseDown">я</span></span></div><div class="keyboard--key key KeyX"><span class="rus"><span class="caseDown">ч</span></span></div><div class="keyboard--key key KeyC"><span class="rus"><span class="caseDown">с</span></span></div><div class="keyboard--key key KeyV"><span class="rus"><span class="caseDown">м</span></span></div><div class="keyboard--key key KeyB"><span class="rus"><span class="caseDown">и</span></span></div><div class="keyboard--key key KeyN"><span class="rus"><span class="caseDown">т</span></span></div><div class="keyboard--key key KeyM"><span class="rus"><span class="caseDown">ь</span></span></div><div class="keyboard--key key Comma"><span class="rus"><span class="caseDown">б</span></span></div><div class="keyboard--key key Period"><span class="rus"><span class="caseDown">ю</span></span></div><div class="keyboard--key key Slash"><span class="rus"><span class="caseDown">.</span></span></div><div class="keyboard--key key ArrowUp"><span class="rus"><span class="caseDown">&#9650</span></span></div><div class="keyboard--key key ShiftRight"><span class="rus"><span class="caseDown">Shift</span></span></div>        </div>',
)
keyboard.insertAdjacentHTML(
  'beforeend',
  '<div class="keyboard--row row"><div class="keyboard--key key ControlLeft"><span class="rus"><span class="caseDown">Ctrl</span></span></div><div class="keyboard--key key MetaLeft"><span class="rus"><span class="caseDown">Win</span></span></div><div class="keyboard--key key AltLeft"><span class="rus"><span class="caseDown">Alt</span></span></div><div class="keyboard--key key Space"><span class="rus"><span class="caseDown"> </span></span></div><div class="keyboard--key key AltRight"><span class="rus"><span class="caseDown">Alt</span></span></div><div class="keyboard--key key ArrowLeft"><span class="rus"><span class="caseDown">&#9664</span></span></div><div class="keyboard--key key ArrowDown"><span class="rus"><span class="caseDown">&#9660</span></span></div><div class="keyboard--key key ArrowRight"><span class="rus"><span class="caseDown">&#9654</span></span></div><div class="keyboard--key key ControlRight"><span class="rus"><span class="caseDown">Ctrl</span></span></div>        </div>',
)

const key = document.querySelectorAll('.key')
// console.log(key)
// key.forEach((el) =>
//   el.addEventListener('click', (e) => {
//     console.log(e.code)
//   }),
// )
const textarea = document.querySelector('.textarea')

key.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (
      el.textContent.length <= 1 &&
      el.textContent !== '◀' &&
      el.textContent !== '▲' &&
      el.textContent !== '▶' &&
      el.textContent !== '▼'
    ) {
      textarea.innerHTML += el.textContent

      // console.log(el.textContent)
    }

    // else if () {

    // }
  })
  // el.addEventListener('keydown', () => {
  //   // if (key) {
  //   console.log(el)
  //   // }
  // })
})
key.forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active')
    // console.log('ffff')
  })
  el.addEventListener('mouseup', () => {
    el.classList.remove('active')
    // console.log('ffff')
  })
})
// key.forEach((el) => {
// key.addEventListener('mousedown', () => {
//   key.forEach((el) => {
//     //   el.addEventListener('mousedown', () => {
//     el.classList.add('active')
//     //     // console.log('ffff')
//     //   })
//     //   el.classList.add('active')
//     //   // console.log('ffff')
//     // })
//     //   el.addEventListener('mouseup', () => {
//     //     el.classList.remove('active')
//     //     // console.log('ffff')
//   })
// })
addEventListener('keydown', (e) => {
  console.log(e.code)

  key.forEach((el) => {
    if (el.classList.contains(`${e.code}`)) {
      const keyTab = document.querySelector(`.${e.code}`)
      keyTab.classList.add('active')
      console.log(keyTab)
      console.log(`.${e.code}`)
    }
  })
})
addEventListener('keyup', (e) => {
  console.log(e.code)

  key.forEach((el) => {
    if (el.classList.contains(`${e.code}`)) {
      const keyTab = document.querySelector(`.${e.code}`)
      keyTab.classList.remove('active')
    }
  })
})
document.addEventListener('click', (e) => {
  key.forEach((el) => {})
})
const backspace = document.querySelector('.Backspace')
backspace.addEventListener('click', () => {
  textarea.innerHTML = textarea.value.substring(0, textarea.value.length - 1)
})
