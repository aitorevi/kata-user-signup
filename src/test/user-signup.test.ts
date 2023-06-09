import {UserService} from "../core/UserService";
import {FakeDataBase} from "../core/FakeDataBase";

/*
"" -> []
'@gmail.com' -> 'error not is email'
'example@gmail.com' -> 'success message'
'example@gmail.com' -> ['example@gmail.com']
['example@gmail.com'], 'example@gmail.com' ->  "example@gmail.com already exists"
 */

describe("Sign-up", () => {
    let fakeDb
    let service
    let spy

    beforeEach(() => {
        fakeDb = new FakeDataBase()
        service = new UserService(fakeDb)
        spy = jest.spyOn(service, "saveUserInRepository")
    })

    it("not add user if email it´s empty", () => {
        service.saveUserInRepository("")

        const users = service.getUsersFromRepository()

        expect(spy).toHaveBeenCalled()
        expect(users.length).toBe(0)
    })

    it("throws an error message if email not have the correct format", () => {
        const email = "notAnEmail.com"

        expect(() => service.saveUserInRepository(email)).toThrow(`${email} not have the email format`)
        expect(spy).toHaveBeenCalled()
    })

    it("save user in repository if email have the correct format", () => {
        const email = "example@email.com"

        service.saveUserInRepository(email)

        const users = service.getUsersFromRepository()

        expect(spy).toHaveBeenCalled()
        expect(users[0]).toBe(email)
        expect(users.length).toBe(1)
    })

    it("throw an error message if the user already exist in the repository", () => {
        const email = "example@email.com"

        service.saveUserInRepository(email)

        expect(() => service.saveUserInRepository(email)).toThrow(`${email} already exits`)
        expect(spy).toHaveBeenCalled()
    })
})