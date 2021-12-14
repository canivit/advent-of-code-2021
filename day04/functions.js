function playBingo(toDraw, boards) {
  let game_boards = boards.map(convertBoard);
  let scores = [];
  for (const chosen of toDraw) {
    for (const board of game_boards) {
      markBoard(board, chosen);
      if (isBoardWinning(board)) {
        scores.push(boardScore(board, chosen));
      }
    }
    game_boards = game_boards.filter(board => { return !isBoardWinning(board); });
  }
  return scores;
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
      }
    }
  }
}

function isBoardWinning(board) {
  return hasWinningRow(board) || hasWinningColumn(board);
}

function hasWinningRow(board) {
  return board.some(row => row.every(cell => cell['marked']));
}

function hasWinningColumn(board) {
  const columns = [];
  for (let colIdx = 0; colIdx < board[0].length; colIdx += 1) {
    columns.push(board.map(row => row[colIdx]));
  }
  return columns.some(column => {
    return column.every(cell => cell['marked']);
  });
}

module.exports = { playBingo, markBoard, boardScore, convertBoard, isBoardWinning };