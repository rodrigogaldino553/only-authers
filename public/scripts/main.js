const body = document.querySelector('body')

function alert() {
    const params = new URLSearchParams(window.location.search)

    if (params.has('message')) {
        showAlert(params.get('message'), params.get('status'))
    }

}


function showAlert(message, status){
    let state = 'primary'

    state = status >= 200 && status < 400 ? 'succes' : 'danger'

    body.innerHTML += `<div class="alert alert-${state} custom-alert" role="alert">
        ${message}
      </div>`


        const popup = document.querySelector('.custom-alert')
        
        setTimeout( () => { popup.style.display = 'none' }, 3000 )
}


alert()


