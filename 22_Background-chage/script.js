let Imgbox = document.querySelector(".img-box");
let ImgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("original-img");
let line = document.getElementById("line");

originalImg.style.width = Imgbox.offsetWidth + "px";

let leftspace = Imgbox.offsetLeft;

Imgbox.onmousemove = function (e) {
	let boxWidth = e.pageX - leftspace + "px";
	ImgWrap.style.width = boxWidth;
	line.style.left = boxWidth;
};
