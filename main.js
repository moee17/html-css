var modal = document.getElementById("myModal")
var btn = document.getElementById("myBtn")
var btn2 = document.getElementById("myBtn2")
var span = document.getElementById("close")

// btn.onclick = function() {
//     modal.style.display = "block"
// }

// btn2.onclick = function() {
//     modal.style.display = "block"
// }

span.onclick = function () {
    modal.style.display = "none"
}

var sub = document.querySelectorAll(".subBtn")

for (let i = 0; i < sub.length; i++) {
  let currItem = sub[i]
  currItem.addEventListener("click",() => {
   modal.style.display = "block"
  })
    
}


console.log("askdjlfas")