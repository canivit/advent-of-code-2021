function playBingo(toDraw, boards) {
    const convertedBoards = boards.map(convertBoard);
    for (const chosen of toDraw) {
        for (const board of convertedBoards) {
            if (markBoard(board, chosen)) {
                return boardScore(board, chosen);
            }
        }
    }
    return 0;
}

function convertBoard(board) {
    return board.map(row => {
        return row.map(n => {
            return {
                value: n,
                marked: false
            };
        });
    })
}

function boardScore(board, chosen) {
    const unmarkedSum = board.reduce((boardSum, row) => {
        return boardSum + row.reduce((rowSum, cell) => {
            if (cell['marked']) {
                return rowSum;
            } else {
                return rowSum + cell['value'];
            }
        }, 0);
    }, 0);
    return unmarkedSum * chosen;
}

function markBoard(board, chosen) {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx += 1) {
        for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx += 1) {
            if (board[rowIdx][colIdx]['value'] === chosen) {
                board[rowIdx][colIdx]['marked'] = true;
                if (isWinningBoard(board, rowIdx, colIdx)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isWinningBoard(board, rowIdx, colIdx) {
    return hasWinningRow(board, rowIdx) || hasWinningColumn(board, colIdx);
}

function hasWinningRow(board, rowIdx) {
    return board[rowIdx].every(cell => cell['marked']);
}

function hasWinningColumn(board, colIdx) {
    return board.map(row => row[colIdx]).every(cell => cell['marked']);
}

module.exports = {playBingo, markBoard, boardScore, convertBoard};