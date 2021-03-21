
var o,p;// lấy tọa độ ô được chọn
function choose(x,y) {
	$(".chon").removeClass("chon");

	$(".b"+x+y).addClass("chon");
	o = x;
	p = y;
}

function cl(d) {
	$(".chon").html(d);
}

function up(x,y) {
	y--;
	if (y == 0) {
		y = 9;
	}
	choose(x,y);
}
function down(x,y) {
	y++;
	if (y == 10) {
		y = 1;
	}
	choose(x,y);
}
function left(x,y) {
	x--;
	if (x == 0) {
		x = 9;
	}
	choose(x,y);
}
function right(x,y) {
	x++;
	if (x == 10) {
		x = 1;
	}
	choose(x,y);
}

$(document).keyup(function (e) { //chọn số  và di chuyển bằng bàn phím
	var t = Number(e.keyCode);
	if (t > 48 && t < 58){
		cl(t - 48);
	} else {
		if (t > 96 && t < 106){
			cl(t - 96);
		} else {
			if (t == 37) left(o,p);
			if (t == 38) up(o,p);
			if (t == 39) right(o,p);
			if (t == 40) down(o,p);
			if (t == 96) del();
		}
	}
});

function del() {
	$(".chon").html("");
}

function clr() {
	$(".chon").removeClass("chon");
	$(".o").html("");
	$(".short").removeClass("short");
}
