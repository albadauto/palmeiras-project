import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async verifyPassword({request, response, auth}: HttpContextContract){
        try{
            const { email, password } = request.body();
            const token = await auth.attempt(email, password);
            return response.json({
                auth: true,
                token
            })
        }catch(err){
            return response.status(400).json({
                auth: false,
                message:"User not found"
            })
        }
    }
}
