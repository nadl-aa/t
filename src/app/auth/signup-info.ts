export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    mobile: string;
    type: string;
    mobile_validation_id: string = undefined;
   /* constructor(name: string, username: string, email: string, password: string, mobile: string, type:string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
        this.mobile = mobile;
        this.type = type;
    }*/
}
