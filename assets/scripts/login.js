const login = () => {
    console.log('funfou')
    if(document.querySelector('#name').value == "admin" && document.querySelector('#passwd').value == "12qwaszx") {
        document.querySelector('#loginSect').style.display = 'none'
        document.querySelector('main').style.display = 'flex'
    } else {
        document.querySelector('#loginSect').style.display = 'flex'
        document.querySelector('main').style.display = 'none'
    }
}