import { Role } from "./role";

export class User {
    id: string;
    username: string;
    email: string;
    mobileNo: number;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}
