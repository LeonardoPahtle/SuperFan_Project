var t = document.getElementById("title");
var s = document.getElementById("spongebob");
var g = document.getElementById("gary");
var m = document.getElementById("mr.krabs");
var p = document.getElementById("pearl");
var w = document.getElementById("squidward");
var l = document.getElementById("squilliam");
var n = document.getElementById("plankton");
var k = document.getElementById("karen");

function appear() {
	g.classList.add("show")
	g.classList.remove("hide")
}

function appear2() {
	p.classList.add("show")
	p.classList.remove("hide")
}

function appear3() {
	l.classList.add("show")
	l.classList.remove("hide")
}

function appear4() {
	k.classList.add("show")
	k.classList.remove("hide")
}

function resetPage(){
    window.location.reload();
} 