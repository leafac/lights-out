import Client from "../Client.js";
import Utils from "../Utils.js";
import Coordinate from "../models/Coordinate.js";

export default class GamesController {
    static async load() {
        await Client.gameElement.load(document.querySelector("body"));
        await GamesController.create();
        GamesController.poll();
    }

    static async create() {
        await Client.gamesRepository.create(Client.game);
    }

    static async poll() {
        if (Client.game.identifier !== null) {
            await Client.gamesRepository.get(Client.game);
            Client.gameElement.render(Client.game);
        }
        await Utils.sleep(200);
        GamesController.poll();
    }

    static async move(row, column) {
        await Client.gamesRepository.move(Client.game, new Coordinate(row, column));
    }

    static async cheat() {
        await Client.gamesRepository.cheat(Client.game);
    }

    static async create() {
        await Client.gamesRepository.create(Client.game);
    }
}
