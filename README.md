# Eles estão entre nós 👽

Este projeto faz parte do curso da Driven Education sobre testes unitários e mock de dados em Node.js e TypeScript. Foi desenvolvido com o objetivo de praticar a escrita de testes para a função `oddService`, utilizando mocks para ocultar a lógica secreta do serviço.

## Descrição do Projeto

Você foi contratado para desenvolver uma aplicação ultra secreta para a NASA. Devido ao alto nível de segurança, algumas lógicas de serviço são ocultas e você só tem acesso à resposta esperada para algumas entradas. Felizmente, você aprendeu sobre mocks e pode usá-los para simular as funções ocultas.

## Configuração

Siga estas etapas para rodar os testes em sua máquina local:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto: cd eles-estao-entre-nos.
3. Instale as dependências do projeto executando o seguinte comando: npm i.
4. Execute o comando no terminal para rodar os testes: npm run test

## Testes Unitários

Os testes unitários foram implementados para a função `oddService` com o objetivo de garantir o correto funcionamento da lógica oculta. Durante a implementação dos testes, foram utilizadas as funções `jest.mock` e `jest.spyOn` para criar mocks e simular o comportamento das funções ocultas.

Certifique-se de executar esses testes para garantir que a função `oddService` está se comportando corretamente, levando em consideração a lógica secreta e os mocks aplicados. Os resultados dos testes são exibidos no terminal ao executar o comando `npm run test`.

Lembre-se de que as informações sobre a lógica secreta foram ocultadas de propósito para garantir a segurança da aplicação. Portanto, certifique-se de não compartilhar esses detalhes além do escopo apropriado.

