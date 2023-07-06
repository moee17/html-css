var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var btn2 = document.getElementById("myBtn2");
var span = document.getElementById("close");

span.onclick = function () {
	modal.style.display = "none";
};

var sub = document.querySelectorAll(".subBtn");

for (let i = 0; i < sub.length; i++) {
	let currItem = sub[i];
	currItem.addEventListener("click", () => {
		modal.style.display = "block";
	});
}

var comm = document.querySelectorAll(".emo-sec");
var emoBtn = document.querySelectorAll(".replies");

// console.log(emoBtn);

let isCol = true;
for (i = 0; i < emoBtn.length; i++) {
	let crrBtn = emoBtn[i];
	let crrComm = comm[i];
	crrBtn.addEventListener("click", () => {
		let btn = crrBtn.children[0];
		// btn.style.color = "red";

		if (isCol) {
			isCol = false;
			crrComm.style.display = "block";
		} else {
			isCol = true;
			crrComm.style.display = "none";
		}
	});
}

// comments section end

// like button section

let likeBtn = document.querySelectorAll(".like-btn");

for (i = 0; i < likeBtn.length; i++) {
	let crrLikebtn = likeBtn[i].children[0];
	crrLikebtn.addEventListener("click", () => {
		if ((crrLikebtn.style.color = "#000")) {
			crrLikebtn.style.color = "#2078F4";
		}
	});
}
// console.log(crrLikebtn);

// "fa-solid", "fa-check";

// "fa-sharp", "fa-solid", "fa-thumbs-up";
