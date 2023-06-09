import {UserRepository} from "@core/userRepository";

export class FakeDataBase implements UserRepository {
    private users: string[] = []
    save(email: string) {
        this.users.push(email)
    }

    getUsers() {
        return this.users
    }
}