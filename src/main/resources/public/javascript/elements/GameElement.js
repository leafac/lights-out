export default class GameElement {
    async load(target) {
        this.target = target;
        this.target.innerHTML = await (await fetch("/lights-out.svg")).text();
    }

    render(game) {
        for (const row in game.board) {
            for (const column in game.board[row]) {
                this.target.querySelector(`#button-${row}-${column}`).style.fill = ["rgb(131, 148, 150)", "rgb(211, 54, 130)"][game.board[row][column]];
            }
        }
    }
}
