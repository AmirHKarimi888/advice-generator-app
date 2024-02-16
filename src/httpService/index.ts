class HttpService {

    url:string = "https://api.adviceslip.com/";

    constructor() {

    }

    async get(url: string) {
        try {
            return await fetch(url);
        } catch (err: any) {
            console.log(err.message);
        }
    }
}

export default new HttpService();