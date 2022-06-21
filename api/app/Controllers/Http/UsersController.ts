import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async store({request, response}: HttpContextContract){
        try{
            const data = request.body();
                await User.create(data);
                return response.status(200).json({
                    insert: true,
                    message: "Usuário criado com sucesso!"
                })
        }catch(err){
            console.log(err);
        }
    }
}
