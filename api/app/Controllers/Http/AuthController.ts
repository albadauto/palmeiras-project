import { Exception } from '@adonisjs/core/build/standalone'
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
        }catch{
            throw new Exception("Error");
        }
    }
}
