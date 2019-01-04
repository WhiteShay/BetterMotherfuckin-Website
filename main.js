function displayMessage() {
    let html = document.querySelector('html');

    let panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);
    
    let msg = document.createElement('p');
    msg.textContent = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';
    panel.appendChild(msg);
    
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'Non merci';
    panel.appendChild(closeBtn);

    let linkBtn = document.createElement('button');
    linkBtn.textContent = 'OK'
    panel.appendChild(linkBtn)
    
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    }
  }
  displayMessage();