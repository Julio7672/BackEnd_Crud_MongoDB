# About NODE.js API

# API Features
Fazer com node.js uma API de CRUD de produtos no padrão Rest e utilizar o MongoDB como banco de dados, então tu vai fazer o seguinte, as propriedades que o produto vai ter são:
id: Gerado automaticamente sem o usuário precisar inserir, não pode ser nulo
name: O usuário insere e precisa ser no mínimo 2 letras, não pode ser nulo, é um campo obrigatório
description: Campo opcional, mas caso o usuário opte por preencher, precisa de no mínimo 10 letras, pode ser nulo
value: O valor do produto, precisa ser maior que 0, não pode aceitar valores negativos e é obrigatório.
stock: Quantidade de produtos no stock, não pode ser menor que 0, não pode ter valores negativos e é obrigatório.

A funcionalidades que esse CRUD vai precisar ter são:
1. Pesquisar e listar o produto por ID
2. Listar todos os produtos
3. Criar um produto
4. Atualizar um produto
5. Deletar um produto

Obs:
1. O produto não pode ser duplicado no banco de dados.
2. Caso for listar os produtos, caso a lista esteja vazia ou não encontre o produto, mandar uma mensagem que a lista está vazia ou produto não foi encontrado.
3. Ao tentar inserir um produto, verificar pelo nome se o mesmo já não existe.
4. Quando for atualizar um produto, fazer as mesmas verificações acima.
5. Quando for deletar um produto, fazer as mesmas verificações.