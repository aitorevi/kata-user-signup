import {UserService} from "../core/UserService";
import {FakeDataBase} from "../core/FakeDataBase";

/*
"" -> []
'@gmail.com' -> 'error not is email'
'example@gmail.com' -> 'success message'
'example@gmail.com' -> ['example@gmail.com']
['example@gmail.com'], 'example@gmail.com' ->  "error that email already exists"
 */
describe('Sign-up', () => {

    let fakeDB
    let service
    let spy
    beforeEach(() => {
        fakeDB = new FakeDataBase()
        service = new UserService(fakeDB)
        spy = jest.spyOn(service, "saveUserRepository")
    })

    it('not add user if email it´s empty', () => {
        service.saveUserRepository("")

        const users = service.getUsersFromRepository()
        expect(spy).toHaveBeenCalled()
        expect(users.length).toBe(0)
    })

    it('throws an error message if email not have the correct format', () => {
        const email = "notAnEmail.com"


        expect(() => service.saveUserRepository(email)).toThrow(`${email} not have the email format`)
        expect(spy).toHaveBeenCalled()

    });

    it('save user in repository if email have the correct format', () => {
        const email = "example@email.com"

        service.saveUserRepository(email)

        const users = service.getUsersFromRepository()

        expect(spy).toHaveBeenCalled()
        expect(users[0]).toBe(email)
        expect(users.length).toBe(1)


    });
})