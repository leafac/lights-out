export default class GamesRepository {
    async create(game) {
        game.identifier = await (await fetch("/games", {method: "POST"})).text();
    }

    async get(game) {
        game.board = (await (await fetch(`/games/${game.identifier}`)).json()).board;
    }

    async move(game, coordinate) {
        await fetch(`/games/${game.identifier}`, {method: "PUT", body: JSON.stringify(coordinate)});
    }

    async cheat(game) {
        await fetch(`/games/${game.identifier}/cheat`, {method: "PUT"});
    }
}
