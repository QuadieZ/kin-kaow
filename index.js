var modal = document.getElementById('myModal');

function modalPop() {
    modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }