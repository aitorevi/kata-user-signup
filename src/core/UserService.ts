import {UserRepository} from "@core/userRepository";

export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }

    save(email: string) {

        if (this.isEmailNotEmpty(email)) {
            this.userRepository.save(email)
        }
        const notHaveEmailFormat = this.checkCorrectFormatOf(email);
        if (notHaveEmailFormat) {
            throw new Error(`${email} not have the email format`)
        }
    }

    private isEmailNotEmpty(email: string) {
        return email !== "";
    }

    private checkCorrectFormatOf(email: string) {

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return email && !email.match(emailRegex);
    }

    getUsers() {
        return this.userRepository.getUsers()
    }
}