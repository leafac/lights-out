export default class Utils {
    static sleep(duration) {
        return new Promise(resolve => window.setTimeout(resolve, duration));
    }
}
