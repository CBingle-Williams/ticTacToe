const combinations = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['6','4','2']];

var counter = 0, active = 0, playerA = [], playerB = [];
var reset = document.getElementById('reset').addEventListener('click', resetBoard);
var items = document.querySelectorAll('h2')[0];

var boxs = document.getElementsByTagName('td');
for (let box of boxs) {
    box.addEventListener('click', function () {
        if (!box.className){play(box.getAttribute('data-num'),box);}
    });
};

function checkCombination(array) {
    for (let combination of combinations) {
        if(combination.every((val) => array.includes(val))) {return true;}
    }
};

function play(string,element) {
    if (counter < 8) {
        if (active == 0){
            element.className = 'selected';
            element.innerHTML = 'X';
            items.textContent = "It's A's turn";
            playerA.push(string);
            if (checkCombination(playerA)) {
                alert('Player A won');
                resetBoard();
            }
            active = 1;
            counter ++;
        }
        else {
            element.className = 'selected';
            element.innerHTML = 'Oåß';
            items.textContent = "It's B's turn";
            playerB.push(string);
            if (checkCombination(playerB)) {
                alert('Player B won');
                resetBoard();
            }
            active = 0;
            counter++;
        }
    }
    else {alert('No winner');}
}

function resetBoard(){location.reload();}