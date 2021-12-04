function move1(commands) {
    let x = 0;
    let y = 0;
    for (let cmd of commands) {
        let pair = cmd.split(' ');
        let direction = pair[0];
        let value = parseInt(pair[1], 10);
        if (direction == 'forward') {
            x += value;
        } else if (direction == 'up') {
            y -= value;
        } else if (direction == 'down') {
            y += value;
        }
    }
    return [x, y];
}

function move2(commands) {
    let x = 0;
    let y = 0;
    let aim = 0;
    for (let cmd of commands) {
        let pair = cmd.split(' ');
        let direction = pair[0];
        let value = parseInt(pair[1], 10);
        if (direction == 'forward') {
            x += value;
            y += value * aim;
        } else if (direction == 'up') {
            aim -= value;
        } else if (direction == 'down') {
            aim += value;
        }
    }
    return [x, y];
}

module.exports = { move1, move2 };