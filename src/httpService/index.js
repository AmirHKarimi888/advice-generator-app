class HttpService {
    url = "https://api.adviceslip.com/";
    constructor() {
    }
    async get(url) {
        try {
            return await fetch(url);
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
export default new HttpService();
