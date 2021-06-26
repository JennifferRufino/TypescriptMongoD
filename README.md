# API Rest criado com TypeScript e Mongoose.

# Como rodar o projeto:

  * Setup inicial
     
        - git clone https://github.com/JennifferRufino/nodejs-mongodb-typescript
        - yarn
    
   * Rodar o servidor
   
         - yarn start
    
# Rotas:

 GET /api/produtos
 
    - Lista todos os produtos
  
  GET /api/produtos/:id
  
    - Lista um produto com base no id
    
  POST /api/produtos
  
    - Cria produto
       - Corpo da requisição
              - nome_produto: string
              - descricao_produto: string
              - quantidade_produto: number
              - preco_produro: number
      
  PUT /api/usuarios
  
    - Atualiza um produto
    - Corpo da requisição
       - nome_produto: string
      - descricao_produto: string
      - quantidade_produto: number
      - preco_produro: number
      
DELETE /api/usuarios/:id

    - Deleta um produto
    - Parâmetros de rota da requisição:
      - id
