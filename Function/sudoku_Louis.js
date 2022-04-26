let g = [
[0, 7, 6, 0, 8, 0, 0 ,4 ,1],
[0, 2, 1, 0, 0, 0, 9 ,0 ,7],
[5, 0, 0, 0, 0, 0, 0 ,8 ,6],
[4, 0, 0, 6, 7, 9, 0 ,2 ,0],
[0, 8, 0, 0, 4, 0, 0 ,5 ,0],
[0, 6, 0, 8, 2, 5, 0 ,0 ,4],
[7, 4, 0, 0, 0, 0, 0 ,0 ,5],
[6, 0, 2, 0, 0, 0, 4 ,7 ,0],
[1, 9, 0, 0, 5, 0, 8 ,6 ,0],
];


function isOnLine(grid, value, lineIndex) {
	for (let i = 0; i < grid[lineIndex].length; i++) {
		if (grid[lineIndex][i] === value)
			return true;
	}
	return false;
}

function isOnColon(grid, value, colonIndex) {
	for (let i = 0; i < grid.length; i++) {
		if (grid[i][colonIndex] === value)
			return true;
	}
	return false;
}

function isOnSquare(grid, value, lineIndex, colonIndex) {
	let s = Math.sqrt(grid.length); // le sudoku est compose de s x s carres de cote s
	let lineStart = lineIndex - lineIndex % s;
	let colonStart = colonIndex - colonIndex % s;
	for (let i = 0; i < s; i++) {
		for (let j = 0; j < s; j++) {
			if (grid[lineStart + i][colonStart + j] === value)
				return true;
		}
	}
	return false;
}

function cloneGrid(grid) {
	let newGrid = [];
	for (let i = 0; i < grid.length; i++) {
		newGrid.push([]);
		for (let j = 0; j < grid[0].length; j++) {
			newGrid[i][j] = grid[i][j];
		}
	}
	return newGrid;
}

function isValid(grid, position) {
	if (position === grid.length * grid.length)
		return true;
	let colon = position % grid.length;
	let line = (position - colon) / grid.length;
	if (grid[line][colon] !== 0)
		return isValid(grid, position + 1);
	for (let i = 1; i <= grid.length; i++) {
		if (isOnLine(grid, i, line) === false && isOnColon(grid, i, colon) === false && isOnSquare(grid, i, line, colon) === false) {
			grid[line][colon] = i;
			if (isValid(grid, position + 1))
				return true;
		}
	}
	grid[line][colon] = 0;
	return false;
}

let gInitialState = cloneGrid(g);

console.log(gInitialState);
 
isValid(g, 0);

console.log(g);
