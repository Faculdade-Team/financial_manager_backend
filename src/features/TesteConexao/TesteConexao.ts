import { Request, Response } from 'express'

class TesteConexao {
    async ping(request: Request, response: Response) {
        try {
          console.log('Conexão com o backend está ok!')

            response.status(200).json({ message: 'Conexão com o backend está ok!' })
        } catch (error) {
            response.status(500).json({ message: 'Erro ao conectar com o banco de dados!' })
        }
    }
}

export default TesteConexao