document.addEventListener('DOMContentLoaded', function() {
    // Elements
    var buttons = $('.crystal-button');
    var winsCountDOM = $('#wins-count');
    var lossesCountDOM = $('#losses-count');
    var scoreDOM = $('#score');
    var numberDOM = $('#number-container');
    // Vars
    var score = 0;
    var wins = 0;
    var losses = 0;
    var randomNum = 0;
    var crystalValues = [];

    function init() {
        buttons.click(handleCrystalPressed);
        setupGame();
        lossesCountDOM.html(0);
        winsCountDOM.html(0);
    }

    function handleCrystalPressed(e) {
        var crystalNum = e.target.value;
        console.log(e);
        console.log('value: ', crystalNum);
        updateScore(crystalNum);
    }

    function setupGame() {
        crystalValues = [];
        setupButtons();
        randomNum = generateRandomNum(19, 120);
        score = 0;
        scoreDOM.html(score);
        numberDOM[0].innerHTML = randomNum;
    }

    function setupButtons() {
        for (var i = 0; i < buttons.length; i++) {
            var buttonVal = generateCrystalNum();
            $(buttons[i]).val(buttonVal);
        }
    }

    function generateRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateCrystalNum() {
        var crystalNum = generateRandomNum(1, 12);

        // if (crystalValues.indexOf(crystalNum) > -1) {
        //     console.log('Ooops! I already exist, call myself again to get a new number!');
        //     generateCrystalNum();
        // } else {
        //     crystalValues.push(crystalNum);
        //
        //     return crystalNum;
        // }

        do {
            // This will loop until the crystalValues.indexOf
            // check returns -1. This indicates the randomly
            // generated number assigned to crystalNum
            // does not exist in the array.
            console.log('executing do-while loop...');
            crystalNum = generateRandomNum(1, 12);
        } while (crystalValues.indexOf(crystalNum) !== -1);

        crystalValues.push(crystalNum);

        return crystalNum;
    }

    function generateGameNum() {
        return generateRandomNum(19, 120);
    }

    function updateWins() {
        wins += 1;

        winsCountDOM.html(wins);
        setupGame();
    }

    function updateLosses() {
        losses += 1;

        lossesCountDOM.html(losses);
        setupGame();
    }

    function updateScore(num) {
        var toNum = Number(num);
        var type = typeof toNum;
        score += Number(num);
        console.log(score);
        scoreDOM.html(score.toString());

        if (randomNum === score) {
            updateWins();
        } else if (randomNum < score) {
            updateLosses();
        } else {}
    }

    init();

});
