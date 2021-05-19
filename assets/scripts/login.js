window.onload = () => {
    if(localStorage.getItem('4elementsUsernamevfx') && localStorage.getItem('4elementsPasswordvfx')) {
    document.querySelector('#name').value = localStorage.getItem('4elementsUsernamevfx')
    document.querySelector('#passwd').value = localStorage.getItem('4elementsPasswordvfx')
    login();
    }
}

const login = () => {
    if(document.querySelector('#name').value == "admin" && document.querySelector('#passwd').value == "12qwaszx") {
        localStorage.setItem('4elementsUsernamevfx', 'admin')
        localStorage.setItem('4elementsPasswordvfx', '12qwaszx')
        document.querySelector('#loginSect').style.height = '0vh'
        document.querySelector('#loginSect').innerHTML = '<h1 style="font-size: 2rem">Bem-Vindo!<h1>'
        document.querySelector('main').style.display = 'flex'
    } else {
        document.querySelector('#loginSect').style.display = 'flex'
        document.querySelector('main').style.display = 'none'
    }
}