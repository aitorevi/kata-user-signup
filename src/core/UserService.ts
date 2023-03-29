import {UserRepository} from "@core/userRepository";

export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }

    saveUserRepository(email: string) {

        const notHaveEmailFormat = this.checkCorrectFormatOf(email);
        if (notHaveEmailFormat) {
            throw new Error(`${email} not have the email format`)
        }

        if (this.isEmailNotEmpty(email)) {
            this.userRepository.save(email)
        }


    }

    private isEmailNotEmpty(email: string) {
        return email !== "";
    }

    private checkCorrectFormatOf(email: string) {

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return email && !email.match(emailRegex);
    }

    getUsersFromRepository() {
        return this.userRepository.getUsers()
    }
}