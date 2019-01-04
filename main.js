function displayMessage() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);
    
    var msg = document.createElement('p');
    msg.textContent = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';
    panel.appendChild(msg);
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'Non merci';
    panel.appendChild(closeBtn);

    var linkBtn = document.createElement('button');
    linkBtn.textContent = 'OK'
    panel.appendChild(linkBtn)
    
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    }
}