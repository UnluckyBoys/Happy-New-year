const dates =document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updeteYear(){

const  caranYear =new Date().getFullYear()

const newYear = new Date(`january 1 ${caranYear + 1}
00:00:00`)

const curentDate =new Date()

//current date - current year
const deff = newYear - curentDate

//date
const d = Math.floor(deff / 1000 / 60 / 60 / 24);

// Hours
const h = Math.floor(deff / 1000 / 60 / 60) % 24 ;

// minutes
const m = Math.floor(deff / 1000 / 60) % 60;

//seconds
const s = Math.floor(deff / 1000) % 60;

dates.innerHTML=d < 10 ?"0" + d:d;
hours.innerHTML = h < 10 ? "0" + h : h;
minutes.innerHTML = m < 10 ? "0" + m : m;
seconds.innerHTML = s < 10 ? "0" + s : s;
//console.log(d+ " " +h +" " + m + " "+s)
}
setInterval(updeteYear,1000)
