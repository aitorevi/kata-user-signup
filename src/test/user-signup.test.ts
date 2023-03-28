import {UserService} from "../core/UserService";
import {FakeDataBase} from "../core/FakeDataBase";

/*
"" -> Not do nothing
'@gmail.com' -> 'error not is email'
'example@gmail.com' -> 'success message'
'example@gmail.com' -> ['example@gmail.com']
['example@gmail.com'], 'example@gmail.com' ->  "error that email already exists"
 */
describe('Sign-up', () => {
    it('not add user if email it´s empty', () => {
        const fakeUser = new FakeDataBase()
        const service = new UserService(fakeUser)
        const spy = jest.spyOn(service, "save")
        service.save("")

        const users = service.getUsers()
        expect(spy).toHaveBeenCalled()
        expect(users.length).toBe(0)
    })

    it('throws an error message if email not have the correct format', () => {
        const fakeUser = new FakeDataBase()
        const service = new UserService(fakeUser)
        const spy = jest.spyOn(service, "save")
        const email = "notAnEmail.com"


        expect(() => service.save(email)).toThrow(`${email} not have the email format`)
        expect(spy).toHaveBeenCalled()

    });
})