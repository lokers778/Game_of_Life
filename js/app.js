document.addEventListener("DOMContentLoaded", function () {

    var GameBoard = document.querySelector("#board");

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth,
            this.height = boardHeight,
            this.board = GameBoard,
            this.cells = [],
            this.createBoard = function () {
                this.board.style.width = this.width * 10 + "px";
                this.board.style.height = this.height * 10 + "px";
                var allPlace = boardHeight * boardWidth;
                for (var i = 0; i < allPlace; i++) {
                    var cell = document.createElement("div");
                    this.cells.push(cell)
                    this.board.appendChild(cell);
                }
                this.cells.forEach(function (target) {
                    target.addEventListener("click", function () {
                       target.classList.toggle("live");
                        console.log("hello")
                    })
                })
            }
            this.calculateNeighbour=function (x,y) {

                
            }
    }


    var game = new GameOfLife(50, 50);
    game.createBoard();
    console.log(game.cells)


})
;