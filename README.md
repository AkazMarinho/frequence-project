# Sistema de frequência LOGOS

## Sobre o projeto

O LOGOS  é um cursinho popular de iniciativa voluntária dentro da Universidade Federal do Pará, Campus Castanhal, com objetivo de abordar conteúdo de forma preparatória para vestibulares e o ENEM(Exame Nacional do Ensino Médio). Com o desenvolvimento do Cursinho ao longo do tempo, foi necessário a implementação de um sistema de frequência para um gerenciamento de alunos, como verificações rápida dos seus dados e o controle de frequência.
O sistema trás diversas vantagens, como o armazenamento de dados de frequência, onde eram guardados em documentos de planilha, e verificações rápida de dados.  Quando um nove aluno era integrado ao sistema, era necessário organizar de forma manual, sendo agora instantâneo a organização na listagem de alunos. 
O sistema também trás mais segurança, pois é necessário uma identificação e senha para que se tenha acesso aos dados, onde a cada novo login, uma chave de acesso diferente é gerada.

## Tecnologia utilizadas

O projeto é desenvolvido em [React.js](https://react.dev/), sendo utilizados bibliotecas e funcionalidades dessa tecnologia como useContext para ter mais segurança quanto as requisições, [Styled Components](https://styled-components.com/) para o design system de alguns componentes, [React Router Dom](https://reactrouter.com/en/main) para interação entre páginas, [Axios](https://axios-http.com/) para ralizar as requisições Rest, [React icons](https://react-icons.github.io/react-icons/) para utilização de ícones, em algumas partes, foi utilizado a biblioteca de estilização [Tailwind](https://tailwindcss.com/) para uma rapidez de desenvolvimento.

## Telas do projeto

- Login

É realizado a verificação dos dados informados se estão corretos, caso estejam, o usuário será direcionado para a tela Home. 

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/1c0fbf56-6702-476a-8779-e647605e6808)

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/5299b6b3-787b-46a7-aec9-bb6eeb6e1de0)

Caso os dados estejam incorretos, irá aparecer uma mensagem informando o erro.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/3a484e4e-5085-4075-add1-f91f9db5508e)

- Home
  
Apresenta a barra lateral que fica disponível durante o usuário estar logado, onde apresenta as opções de listagem de alunos, criar novo aluno e a frequência por dia.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/240922ab-dab7-4bd6-8815-a75084a4a1bc)

É possível ver os dados como o nome, CPF, ano de nascimento, email e duas ações que são a visualização do QRcode e visualização de dados de frequência individual do aluno.

- QR code

O QRcode é necessário para validar a frequência do aluno via aplicativo, facilitando e tornando mais seguro o sistema de frequência uma vez que cada QRcode é único, sendo imprescindível que cada aluno tenha o seu.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/4f3148df-11cc-48b8-a31c-0ce0fc0debb4)

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/0da3788d-9801-44a9-a9b2-9254c2c2babf)

- Criar novo aluno

Pode ser adicionado dados de um novo aluno que esta sendo integrado ao cursinho, onde todos os campos devem ser preenchidos.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/4158af01-386a-4d28-aa0b-dd58eba86050)

Caso uma tentativa de enviar os dados incompletos, irá gerar um erro.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/b74aadd6-47bc-4d3b-ab04-0bef1784ca62)

Ao ser criados os dados, o usuario será direcionado a tela Home.

- Dados de frequência individual dos alunos

Fica disponível a frequência por mês do aluno, sendo que a frequência é definida apenas pelos dias em que o estudante tem presença ou falta justificada, assim como a opção de excluir os dados do aluno. A página conta com um sistema de justificação de falta caso o aluno tenha faltado, e também a revogação de uma falta justificada

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/05c8cb0d-c4df-4c4d-be68-19d04a24674a)

Caso um aluno falte, é possivel justificar a sua falta, com um campo de motivo e dia especifico.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/7a2c05c8-1cef-4626-b06e-8689b00b36be)

Se for realizado uma tentativa de justificar a falta em um dia que o aluno tenha presença,um erro será exibido. 

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/ff52e846-740b-4a9d-bb6f-3b0c846d2697)

 Para que tenha sucesso de envio, é necessario que exista um motivo e uma data, pois uma tentativa de envio de dados vazios resultara na exibição de um erro.
 
![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/bbfb3b49-8d48-4448-a081-6ca08deeef3a)

Caso seja verificado que um aluno com uma falta justificada não tenha um comprovação real, a falta justificada, pode ser anulada.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/cd47b791-8570-48eb-ac52-e0bc08af1b04)

Para que um aluno tenha seus dados excluídos, uma tela de confirmação seja exibida.

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/82bab941-ac91-4361-aa16-d16d52f6070d)

- Frequência por dia

É possível visualizar um relatório diário de frequência, onde será mostrados todos os alunos, mas podendo ser exibidos apenas os que tiveram presença ou apenas os que tiveram a falta justificada.
![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/5e10fbf8-e846-4de5-99f7-9c734c1bb6f8)

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/358f3425-8ff5-4557-bbb4-67897ece88ef)

![image](https://github.com/AkazMarinho/frequence-project/assets/58227029/2f8e1cb7-2cc6-409f-adbf-4b8a8f3f4d7d)

## Dependências necessárias e versão

As dependências necessárias para rodar o projetos estão apresentadas abaixo:

    "axios": "^1.6.2",
	"react": "^18.2.0",
	"react-dom": "^18.2.0",
	"react-dotenv": "^0.1.3",
	"react-icon-base": "^2.1.2",
	"react-icons": "^4.12.0",
	"react-router-dom": "^6.20.1",
	"react-routes": "^0.2.6",
	"react-scripts": "5.0.1",
	"styled-components": "^6.1.8",

> Obs: caso o sistema apresente algum erro com as bibliotecas ao rodar a aplicação, entre em contato comigo através do email akazmarinho@gmail.com. 
 
## como rodar a aplicação

Copiar o link https do projeto disponível em `<>code`, crie uma pasta em um local do seu PC. Dentro da pasta criada, clique com o botão direito do mouse e abra o git bash, e clone o projeto para o seu repositório local com o seguinte comando:

> Obs: é necessário que tenha instalado previamente o git em seu dispositivo!

		git clone https://github.com/AkazMarinho/frequence-project.git
		
Dê dois cliques na pasta `frequence-project`, clicar com um botão direito do mouse e clicar em `Abrir com code`.

> Obs: Os seguintes passos são referentes ao ambiente de desenvolvimento Visual Studio Code, caso esteja utilizando um ambiente de desenvolvimento diferente, verifique como utilizar, para abrir corretamente o projeto.

Com o atalho `Ctrl + j`, abra o terminal integrado do Visual Studio Code

> Obs: é necessário que tenha instalado previamente o Visual Studio Code em seu dispositivo!

No terminal, insira o seguinte comando para instalar as dependências necessárias:

	npm i react-dotenv react-icons react-router-dom axios styled-components

Após isso, insira o comando de inicializar servidor React local:

	npm start
	
## Possíveis problemas 

O site pode não rodar como esperado, pois é necessario uma chave de acesso para que se tenha acesso a todas as telas, porem, caso queira apenas visualizar as telas, é necessario integrar a um sistema back end que tenha acesso a todas as rotas.

## Próximos passos

O sistema não possui resposividade, então uma possivel atualziação é realizar responsividade no site todo para que o site se adeque a dispositivos moveis
O sistema não conta com a rota de editar dados de alunos, de forma que se um aluno tiver seus dados incorretos, será necessario exclui-lo para poder criar novos dados com correção.
