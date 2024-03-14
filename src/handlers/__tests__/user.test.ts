import * as user from '../user'

describe('user handler', () => {
    it('should create a new user', async () => {
        const req = {body: {username: 'hello', password: 'hi'}}
        const res = {json({token}) {
            expect(token).toBeTruthy()
        }}

        //await user.createNewUser(req, res, () => {}) 
        await user.createNewUser(req, res) 
    })
})




// describe("user handler", () => {
//     it("should do a thing", async () => {
//       expect(1).toBe(1);
//     });
//   });

