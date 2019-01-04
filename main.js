let bckgrndlayout = document.getElementById("bckgrndlayout");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");
let linkBtn = document.getElementById("linkBtn");

linkBtn.addEventListener('click',openPage);
  function openPage() {
      document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
  }

btnClose.addEventListener('click',closePopup);
  function closePopup() {
    bckgrndlayout.style.display = "none";
  }