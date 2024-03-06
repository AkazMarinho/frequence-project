# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Sistema de frequência - cursinho LOGOS, Universidade Federal do Pará, Campus Castanhal

## Como inializar
Para inicializar o projeto, crie uma pasta em sua maquina, e utlizando o git, digite o comando `git clone https://github.com/AkazMarinho/frequence-project.git`.
*Obs: Será necessario instalar algumas dependencias como react-icons e react-router-dom, fique atento aos possiveis erros.*

## Sobre o projeto

O projeto foi criado com intuito de verificar o fluxo de alunos e facilitar a manipulação de dados no Cursinho LOGOS, sendo esse um projeto disponibilizado pela UFPA no campus Castanhal.
O sistema conta com uma tela de `login`, para controle de acesso, sendo restrido apenas aos cordenadores e monitores do cursinho. A segurança é realizada atraves do ID do usuario e sua senha, sendo gerada uma chave de API KEY única a cada login.

### Home
A tela home possui o botão de `criação de dados` para um aluno, assim como uma `listagem de alunos`, onde é possivel verificar o `QR code` de cada aluno, utilizado para registrar a frequencia atraves do app do cursinho, e tambem verificar os dados de cada aluno individualmente.

### Dados individuais dos Alunos
A tela de `verificação de dados individual de alunos` é possivel `vizualizar a frequência do aluno` selecionado de acordo com o mês, sendo mostrados apenas os dias em que o aluno teve a sua frequencia validada. Pode ser alterado uma `falta com a justificativa` adequada, assim como a `revogação de uma falta` anteriormente justificada. Alem disso, é possivel realizar a ação de `exclusão dos dados do aluno`.
