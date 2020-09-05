export class RequestInfo {
    baseurl: string;
    ip: string;
    port: string;
    aaapikey: string;
    publickey: string;
    username: string;
    constructor(baseurl: string, ip: string, port: string, aaapikey: string, publickey: string, username: string) {
        this.baseurl = baseurl;
        this.ip = ip;
        this.port = port;
        this.aaapikey = aaapikey;
        this.publickey = publickey;
        this.username = username;
    }
}
