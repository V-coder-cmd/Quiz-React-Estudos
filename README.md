# Quiz Interativo

## Objetivo

Criar um quiz interativo utilizando React, onde o usuário poderá responder a um conjunto de questões, ver o tempo gasto em cada questão e avançar para a próxima. Esta atividade visa aplicar conhecimentos de:

1. **useState e useEffect**
2. **Passagem de props**
3. **CSS Modules**
4. **Componentes por responsabilidade**
5. **Manipulação de tempo e estado**

## Requisitos Funcionais

O Quiz deve conter **10 questões**, cada uma com **5 opções** (A, B, C, D, E).

### Componente **Header**

O componente **Header** deve exibir:

1. Título do quiz.
2. Questão atual / total de questões.
3. Timer da questão.
4. O timer deve iniciar em cada questão e reiniciar ao passar para a próxima.
5. Cada questão deve ter botões para as respostas, centralizados, com letras A, B, C, D, E.
6. Ao clicar em uma resposta, o quiz deve avançar para a próxima.
7. Layout utilizando **CSS Modules**.

### Componente **QuestionCard**

O componente **QuestionCard** é responsável por exibir o enunciado da questão e suas alternativas de resposta durante o quiz. Ele organiza visualmente a pergunta e cria botões para cada opção, permitindo que o usuário escolha uma delas.

#### Requisitos Funcionais do **QuestionCard**:

1. Exibir o enunciado da questão em destaque.
2. Listar as alternativas como botões clicáveis, cada uma prefixada com as letras A, B, C, D, E.
3. Ao clicar em um botão, chamar a próxima pergunta e guardar a resposta selecionada.

### Componente **ScoreBoard**

O componente **ScoreBoard** deve exibir o resultado do quiz após o usuário responder todas as questões.

#### Requisitos Funcionais do **ScoreBoard**:

1. Exibir cada questão respondida organizada em um card ou tabela. Para cada questão, mostrar:
   - Enunciado da questão
   - Resposta escolhida pelo usuário
   - Resposta correta
   - Pontuação da questão
   - Tempo gasto para responder
   - Destacar visualmente:
     - Perguntas corretas em **verde**
     - Perguntas incorretas em **vermelho**

2. Exibir um resumo no topo:
   - Pontuação final (soma das pontuações das questões corretas).
   - Menor tempo de resposta.
   - Total de acertos e percentual de acertos.

3. Incluir um botão **“Reiniciar Quiz”** para reiniciar a atividade.

## Estrutura de Pastas

```plaintext
src/
├─ components/
│  ├─ Header/
│  │  ├─ index.jsx
│  │  └─ Header.module.css
│  ├─ QuestionCard/
│  │  ├─ index.jsx
│  │  └─ QuestionCard.module.css
│  ├─ ScoreBoard/
│  │  ├─ index.jsx
│  │  └─ ScoreBoard.module.css
├─ data/
│  └─ questions.js
├─ App.jsx
├─ App.module.css
├─ main.jsx

Como Executar

    Clone o repositório:

git clone https://github.com/seu-usuario/quiz-interativo.git

Instale as dependências:
Navegue até a pasta do projeto e execute o comando:

npm install

Inicie o projeto:
Para rodar o projeto em modo de desenvolvimento, use o comando:

npm start

O quiz estará disponível no navegador em: http://localhost:3000.
