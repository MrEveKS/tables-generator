import fs from 'fs';

export class Logger {
    constructor() { /* */ }

    public getLogger() {
        return (request, response, next) => {
            const now = new Date();
            const hour = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
            console.log(data);
            fs.appendFile("server.log", data + "\n", () => { /* */ });
            next();
        }
    }
}