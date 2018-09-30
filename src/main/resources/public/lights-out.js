let gameIdentifier = null;
let gameStateWebSocket = null;

window.addEventListener("load", async () => {
    document.querySelector("body").innerHTML = await (await fetch("/lights-out.svg")).text();
    newGame();
});

const newGame = async () => {
    gameIdentifier = await (await fetch("/games", { method: "POST" })).text();
    newGameStateWebSocket();
};

const newGameStateWebSocket = () => {
    if (gameStateWebSocket !== null) gameStateWebSocket.close();
    gameStateWebSocket = new WebSocket(`ws://${location.hostname}:${location.port}/games/${gameIdentifier}`);
    gameStateWebSocket.addEventListener("message", event => render(JSON.parse(event.data).board));
};

const render = board => {
    for (const row in board) {
        for (const column in board[row]) {
            document.getElementById(`button-${row}-${column}`).style.fill = ["rgb(131, 148, 150)", "rgb(211, 54, 130)"][board[row][column]];
        }
    }
};

const move = async (row, column) => {
    await fetch(`/games/${gameIdentifier}`, { method: "PUT", body: JSON.stringify({row, column}) });
};

const cheat = async () => {
    await fetch(`/games/${gameIdentifier}/cheat`, { method: "PUT" });
};
