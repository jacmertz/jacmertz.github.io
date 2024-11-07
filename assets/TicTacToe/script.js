var turn="x";
function checkWinner() {
    var squares = [];
    $('td').each(function() {
        squares.push($(this).text());
    });

    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

var turn = "x";
$('td').on('click', function() {
    var $square = $(this);
    if ($square.text() == "") {
        $square.text(turn);
        var winner = checkWinner();
        if (winner) {
            alert(winner + " has won!");
            $('td').off('click');
        } else {
            turn = (turn === "x") ? "o" : "x";
            $('#turn').text(turn + "'s turn");
        }
    }
});