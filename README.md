# Sistema de frequência LOGOS
## Sobre o projeto
O LOGOS  é um cursinho popular de iniciativa voluntária dentro da Universidade Federal do Pará, Campus Castanhal, com objetivo de abordar conteúdo de forma preparatória para vestibulares e o ENEM(Exame Nacional do Ensino Médio). Com o desenvolvimento do Cursinho ao longo do tempo, foi necessário a implementação de um sistema de frequência para um gerenciamento de alunos, como verificações rápida dos seus dados e o controle de frequência.
O sistema trás diversas vantagens, como o armazenamento de dados de frequência, onde eram guardados em documentos de planilha, e verificações rápida de dados.  Quando um nove aluno era integrado ao sistema, era necessário organizar de forma manual, sendo agora instantâneo a organização na listagem de alunos. 
O sistema também trás mais segurança, pois é necessário uma identificação e senha para que se tenha acesso aos dados, onde a cada novo login, uma chave de acesso diferente é gerada.
## Tecnologia utilizadas
O projeto é desenvolvido em [React.js](https://react.dev/), sendo utilizados bibliotecas e funcionalidades dessa tecnologia como useContext para ter mais segurança quanto as requisições, [Styled Components](https://styled-components.com/) para o design system de alguns componentes, [React Router Dom](https://reactrouter.com/en/main) para interação entre páginas, [Axios](https://axios-http.com/) para ralizar as requisições Rest, [React icons](https://react-icons.github.io/react-icons/) para utilziação de icones, em algumas partes, foi utilizado a biblioteca de estilização [Tailwind](https://tailwindcss.com/) para uma rapidez de desenvolvimento.
## Telas do projeto
- Login
É realizado a verificação dos dados informados se estão corretos, caso estejam, o usuário será direcionado para a tela Home, caso estejam incorretos, irá aparecer uma mensagem informando o erro.
-- tela de login
-- tela de login com erro

- Home
Apresenta a barra lateral que fica disponível durante o usuário estar logado, onde apresenta as opções de listagem de alunos, e  a frequência por dia.
--Tela Home
É possível ver os dados como o nome, CPF, ano de nascimento, email e duas ações que são a visualização do QRcode e visualização de dados de frequência individual do aluno.
-QR code
O QRcode é necessário para validar a frequência do aluno via aplicativo, facilitando e tornando mais seguro o sistema de frequência uma vez que cada QRcode é único, sendo imprescindível que cada aluno tenha o seu.
--qrcode
- Dados de frequência individual dos alunos
Fica disponível a frequência por mês do aluno, sendo que a frequência é definida apenas pelos dias em que o estudante tem presença ou falta justificada, assim como a opção de excluir os dados do aluno. A página conta com um sistema de justificação de falta caso o aluno tenha faltado, e também a revogação de uma falta justificada
--tela de  frequência individual dos alunos
Caso um aluno falte, é possivel justificar a sua falta, com um campo de motivo e dia especifico. Se for realizado uma tentativa de justificar a falta em um dia que o aluno tenha presença,um erro será exibido. Para que tenha sucesso de envio, é necessario que exista um motivo e uma data, pois uma tentativa de envio de dados vazios resultara na exibição de um erro.
--tela de justificar falta
--tela de justificar falta com erro 1
--tela de justificar falta com erro 1
Caso seja verificado que um aluno com uma falta justificada não tenha um comporvação real, a falta justificada, pode ser anualada.
--tela de anular falta justificada
Para que um aluno tenha seus dados excluidos, uma tela de confirmação seja exibida.
--tela de exclusão
- Frequência por dia
- É possivel visualizar um relatorio diario de frequencia, onde será mostrados todos os alunos, mas podendo ser exibidos appenas os que tiveram presença ou apenas os qeu tiveram a falta jsutificada.
-- todos
--presentes
--justificados
## dependencias necessarias e versão
As dependecias necessarias para rodar o projetos estão apresentadas abaixo:

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
