# netLex frontend test

    - O objetivo desse teste é verificar o conhecimento do(a) candidato(a) em frontend web, nesse teste, o candidato pode escolher construir o frontend através de qualquer framework, (React, Angular, Vue) ou até mesmo, se quiser, pode construir com javascript vanilla.

    - Esse frontend consumirá a API construída nesse mesmo teste, no backend, sugerimos que o candidato faça o backend primeiro e depois o front, mas isso fica a seu critério.

    - Segue o link do protótipo:
            https://www.figma.com/proto/RVMNL080DHMJMER1bPvUPC/Teste-frontend-dev?page-id=110%3A112&node-id=110%3A2501&viewport=241%2C48%2C0.36&scaling=min-zoom&starting-point-node-id=110%3A113


    - Temos uma pasta assets que contém todas as imagens e ícones necessários para construir as telas.
# Critérios de aceite por tela:

    - Tela de Login

        - Input para email do usuário, deve-se ter validação do email no input do usuário
        - Input para senha do usuário, deve ser input do type password.
        - Botão entrar com ação de login (Ideal que seja feito como formulário e submit), esse botão deve consumir o método de login, disponibilizado no backend na rota http://localhost:3086/users/login,
        caso o backend retorne um erro, esse deve ser exibido no front nesse componente de toast, que irá aparecer no canto inferior esquerdo da tela, sugerimos que seja criado um componente separado para mostrar o toast.
        - Caso o login seja feito com sucesso, deve-se armazenar o token que retorna da chamada e inserí-lo no header abaixo:
            Authorization: Bearer ${token}
        

    - Telas dos métodos do Documento

        - Nessas telas, deve-se consumir os 3 métodos criados na API, e exibir seus respectivos resultados de acordo com o input do usuário.
