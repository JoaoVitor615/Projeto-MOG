document.body.setAttribute('data-theme', 't-dark')

const button_changecolor = document.querySelector('.js-theme')

const themes = {
  't-dark': 't-light',
  't-light': 't-dark',
}

document.querySelector('.ball').addEventListener('click', (e)=>{
  e.target.classList.toggle('ball-move');
});

if (button_changecolor) {
  button_changecolor.addEventListener('click', event => {
    event.preventDefault()
    const currentTheme = document.body.dataset.theme
    document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
  })
}