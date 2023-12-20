var startButton = document.getElementById('startButton');
var gameArea = document.getElementById('gameArea');
var result = document.getElementById('result');
var startTime, endTime;

startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    gameArea.style.display = 'block';
    gameArea.style.backgroundColor = 'red';
    startTime = new Date();

    setTimeout(function() {
        gameArea.style.backgroundColor = 'green';
        startTime = new Date();
    }, Math.floor(Math.random() * 10000));
});

gameArea.addEventListener('click', function() {
    if (gameArea.style.backgroundColor == 'green') {
        endTime = new Date();
        var timeDiff = endTime - startTime;
        result.style.display = 'block';
        result.textContent = 'U reactietijd is: ' + timeDiff + 'ms';
        startButton.style.display = 'block';
        gameArea.style.display = 'none';
    }
});