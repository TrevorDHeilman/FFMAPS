import { UserType } from './usertype';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userType: UserType;
}
