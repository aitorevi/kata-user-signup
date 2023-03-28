import {FakeDataBase} from "../core/fake-data.base";

/*
"" -> Not do nothing
'@gmail.com' -> 'error not is email'
'example@gmail.com' -> 'success message'
'example@gmail.com' -> ['example@gmail.com']
['example@gmail.com'], 'example@gmail.com' ->  "error that email already exists"
 */
describe('Sign-up', () => {
    it('not add user if email it´s empty', () => {
        const database = new FakeDataBase()

        expect(database.save("")).toHaveBeenCalled()
    });
})