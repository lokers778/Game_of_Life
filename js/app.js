document.addEventListener("DOMContentLoaded", function () {


    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth,
            this.height = boardHeight,
            this.board = document.querySelector("#board"),
            this.cells = [],
            this.nextGenCellsDead=[],
            this.nextGenCellsAlive=[],
        this.createBoard = function () {
                this.board.style.width = this.width + "px";
                this.board.style.height = this.height  + "px";
                let allPlace = boardHeight * boardWidth;
                for (let i = 0; i < allPlace; i++) {
                    let cell = document.createElement("div");
                    this.cells.push(cell)
                    this.board.appendChild(cell);
                }
                this.cells.forEach(function (target) {
                    target.addEventListener("click", function () {
                        target.classList.toggle("live");
                    })
                });
                this.setButtonEvents()
            };

        this.calculateNeighbour = () => {
            this.nextGenCellsAlive =[];
            this.nextGenCellsDead=[];
            this.cells.forEach((value, index) => {
                let neighboursCounter = 0;
                for (let i = 0; i < 8; i++) {
                    let neighbours = [index - 1, index + 1, index + this.width, index - this.width, index + 1 + this.width, index - 1 + this.width, index + 1 - this.width, index - 1 - this.width];
                    if ([neighbours[i]] > 0 && [neighbours[i]] < this.cells.length) {
                        if (this.cells[neighbours[i]].classList.contains("live")) {
                            neighboursCounter++
                        }
                    }

                }
                if (neighboursCounter === 3) {
                    this.nextGenCellsAlive.push(value)
                }
                if (neighboursCounter !==3) {
                    this.nextGenCellsDead.push(value)
                }

            });

           this.nextGenCellsAlive=[...new Set(this.nextGenCellsAlive)]
            this.nextGenCellsDead=[...new Set(this.nextGenCellsDead)]
            this.newGeneration(this.nextGenCellsAlive,this.nextGenCellsDead)
        };

        this.newGeneration = function (nextGenCellAlive,nextGenCellsDead) {
            console.log(nextGenCellsDead, nextGenCellAlive)
            nextGenCellAlive.forEach((e) => {
                if (!e.classList.contains("live")) {
                    e.classList.add("live")
                }
            });
            nextGenCellsDead.forEach((e) => {
                if (e.classList.contains("live")) {
                   e.classList.remove("live");
                }
            });
        };


        this.start = () => {
            this.interval = setInterval(() => {
                this.calculateNeighbour();
            }, 500);
        };

        this.pause = () => {
            clearInterval(this.interval)
        };

        this.setButtonEvents = () => {
            document.querySelector("#play").addEventListener('click', this.start);
            document.querySelector("#pause").addEventListener('click', this.pause)
        };
    }


    let game = new GameOfLife(20, 20);
    game.createBoard();


})
;