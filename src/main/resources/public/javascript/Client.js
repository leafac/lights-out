import Game from "./models/Game.js";
import GamesRepository from "./repositories/GamesRepository.js";
import GameElement from "./elements/GameElement.js";
import GamesController from "./controllers/GamesController.js";

export default class Client {
    static main() {
        window.addEventListener("load", GamesController.load);
    }
}
Client.game = new Game();
Client.gameElement = new GameElement();
Client.gamesRepository = new GamesRepository();

Client.main();

window.GamesController = GamesController;
