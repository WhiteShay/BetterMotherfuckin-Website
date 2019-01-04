
setTimeout(popUp, 10000);

function popUp(){
  
    let bckgrndlayout = document.getElementById("bckgrndlayout");
    let popup = document.getElementById("popup");
    let closeBtn = document.getElementById("closeBtn");
    let linkBtn = document.getElementById("linkBtn");

    result = popup.confirm("Salut mon pote ça va ? tu veux faire un tour sur notre site ? ");

  if(result ==false){
    while(result==false){
        result = popup.confirm("Salut mon pote ça va ? tu veux faire un tour sur notre site ? ");
    }
    popup.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else{
    popup.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }

linkBtn.addEventListener('click',openPage);
  function openPage() {
      document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
  }

btnClose.addEventListener('click',closePopup);
  function closePopup() {
    bckgrndlayout.style.display = "none";
  }

}