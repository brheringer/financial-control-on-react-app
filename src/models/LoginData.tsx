import { User } from "./User";

export class LoginData {
    constructor(
        public user: User,
        public token: string,
        public error: string
    ) {}
}