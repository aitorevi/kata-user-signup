interface UserRepository {
    save(email: string): void
}
export class FakeDataBase implements UserRepository{
    save(email: string) {
        console.log("")
    }
}
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    save(email: string) {
        this.userRepository.save(email)
    }
}