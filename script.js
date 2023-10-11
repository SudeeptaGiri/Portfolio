const naam = document.getElementById("naam");
const naamText = naam.textContent;
const splitNaam = naamText.split("");
naam.textContent = "";

const sub = document.getElementById("sub");
const subText = sub.textContent;
const splitSub = subText.split("");
sub.textContent = "";

const para = document.getElementById("description");
const paraText = para.textContent;
const splitPara = paraText.split("");
para.textContent = "";

const btns = document.querySelector(".buttons").querySelectorAll("*");

for (let i = 0; i < splitNaam.length; i++) {
	if (splitNaam[i] === " ") {
		naam.innerHTML += "<span>&nbsp;</span>";
	} else {
		naam.innerHTML += "<span>" + splitNaam[i] + "</span>";
	}
}
for (let i = 0; i < splitSub.length; i++) {
	if (splitSub[i] === " ") {
		sub.innerHTML += "<span>&nbsp;</span>";
	} else {
		sub.innerHTML += "<span>" + splitSub[i] + "</span>";
	}
}
for (let i = 0; i < splitPara.length; i++) {
	if (splitPara[i] === " ") {
		para.innerHTML += "<span>&nbsp;</span>";
	} else {
		para.innerHTML += "<span>" + splitPara[i] + "</span>";
	}
}
let idx = 0;
let j = 0;
let word = 0;
let bt = 0;
function startIntervals() {
	let timer1 = setInterval(onTick, 50);

	function onTick() {
		let span = naam.querySelectorAll("span")[idx];
		span.classList.add("fall1");
		idx++;

		if (idx === splitNaam.length) {
			clearInterval(timer1);
			timer1 = null;
			startSecondInterval(); // Start the next interval
		}
	}

	function startSecondInterval() {
		let timer2 = setInterval(onTock, 40);

		function onTock() {
			let span = sub.querySelectorAll("span")[j];
			span.classList.add("fall2");
			j++;

			if (j === splitSub.length) {
				clearInterval(timer2);
				timer2 = null;
				startThirdInterval(); // Start the next interval
			}
		}
	}

	function startThirdInterval() {
		let timer3 = setInterval(onTktk, 30);

		function onTktk() {
			let span = para.querySelectorAll("span")[word];
			span.classList.add("fall2");
			word++;

			if (word === splitPara.length) {
				clearInterval(timer3);
				timer3 = null;
				startFortInterval();
			}
		}
	}
	function startFortInterval() {
		let timer4 = setInterval(onPhwe, 100);
		function onPhwe() {
			btns[bt].classList.add("fall3");
			bt++;
			if (bt === btns.length) {
				clearInterval(timer4);
				timer4 = null;
			}
		}
	}
}

startIntervals();
