

function out() {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			$(".b"+(i+1)+(j+1)).html(s[i][j]);
		}
	}
}


var r = [], c = [], b = [];
var s = [];
function newArr() {
	for (let i = 0; i < 9; i++){
		r[i] = [];
		c[i] = [];
		s[i] = [];
	}
	for (let i = 0; i < 3; i++) {
		b[i] = [];
		for (let j = 0; j < 3; j++) {
			b[i][j] = [];
		}
	}
}

function addSudoku() {
	newArr();
	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			s[i-1].push(Number($(".b"+i+j).html()));
			if (s[i-1][j-1] == 0) {
				$(".b"+i+j).addClass("short");
			}
		}
	}
}

function create() {
	addSudoku();
	// newArr();
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (s[i][j] != 0) {
				let d = s[i][j];
				c[i][d-1] = true;
				r[j][d-1] = true;
				b[Math.floor(i/3)][Math.floor(j/3)][d-1] = true;
			}
		}
	}
}

function solution(x, y) { // giá trị test, mảng tọa độ của ô chưa điền, vị trí của nó trong mảng đó
	if (x < 9 && y < 9) {
		if (s[x][y] == 0) {
			for (let d = 1; d < 10; d++) {
				if (!c[x][d-1] && !r[y][d-1] && !b[Math.floor(x/3)][Math.floor(y/3)][d-1]) {
					c[x][d-1] = true;
					r[y][d-1] = true;
					b[Math.floor(x/3)][Math.floor(y/3)][d-1] = true;
					s[x][y] = d;

					solution(x+1, y);

					c[x][d-1] = false;
					r[y][d-1] = false;
					b[Math.floor(x/3)][Math.floor(y/3)][d-1] = false;
					s[x][y] = 0;

				}
			}
		} else {
			solution(x+1, y);
		}
	} else if (x >= 9 && y < 9) {
		solution(0, y+1);
	} else {
		out();
		// console.log(s);
	}
}

function sol() {
	create();
	solution(0, 0);
	// console.log(s);
}