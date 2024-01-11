function notify(message) {
    let messageNotification = document.getElementById('notification')
    messageNotification.style.display = 'block'
    messageNotification.textContent = message
    messageNotification.addEventListener('click', onClick)
  
    function onClick() {
      messageNotification.style.display = 'none'
    }
  }