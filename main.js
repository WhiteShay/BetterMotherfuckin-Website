function displayMessage() {
    let html = document.querySelector('html');

    let panel = document.createElement('div');
    panel.setAttribute('id','msgBox');
    html.appendChild(panel);
    
    let msg = document.createElement('p');
    msg.textContent = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';
    panel.appendChild(msg);
    
    let closeBtn = document.createElement('button_1');
    closeBtn.textContent = 'Non merci';
    panel.appendChild(closeBtn);

    let linkBtn = document.createElement('button_2');
    linkBtn.textContent = 'OK'
    panel.appendChild(linkBtn)
    
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    }
    
    linkBtn.onclick = function() {

    }
  }
setTimeout(displayMessage,10000);