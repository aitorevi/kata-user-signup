import {UserService, FakeDataBase} from "../core/user.service";

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
        const spy = jest.spyOn(fakeUser,"save")
        service.save("")

        expect(spy).toHaveBeenCalled()
    })
})