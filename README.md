
# 🎬 Lista-Filmes-Mobile

Uma aplicação mobile de uma única tela, desenvolvida em **React Native** (modelo **blank-typescript**), que exibe uma lista com informações de 4 filmes.

Este projeto foi desenvolvido como parte da **primeira avaliação da disciplina de Desenvolvimento para Dispositivos Móveis**.

---

## 📱 Funcionalidades

- Exibição de uma lista de filmes
- Cada item da lista contém:
  - 🎞️ Cartaz do filme
  - 🎬 Título
  - 🎥 Diretor
  - 🌎 Origem (país)
  - 📅 Ano de lançamento

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) (com TypeScript)
- [Expo](https://expo.dev/) (se utilizado)
- Estilização com **StyleSheet** do React Native

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente (opcional)

```bash
npm install -g expo-cli
```  

### ▶️ Passos para Executar

1. Clone o repositório:
```bash
git clone https://github.com/Augusto240/Lista-Filmes-Mobile.git
```  

2. Acesse a pasta do projeto:
```bash
cd Lista-Filmes-Mobile
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Inicie o projeto:
```bash
npx expo start
```

*Ou, se estiver utilizando React Native CLI:*
```bash
npx react-native run-android
# ou
npx react-native run-ios
```

*Escaneie o QR Code com o app Expo Go ou rode no emulador.*

---

## 📂 Estrutura do Projeto

```
.
├── App.tsx
├── assets/
│   ├── filme1.jpg
│   ├── filme2.jpg
│   ├── filme3.png
│   └── filme4.png
├── node_modules/
├── package.json
└── README.md
```

---

## 🎥 Filmes Exibidos na Lista

| Filme                  | Diretor            | Origem         | Ano  |
|------------------------|--------------------|----------------|------|
| A Viagem de Chihiro    | Hayao Miyazaki     | Japão          | 2001 |
| Parasita               | Bong Joon Ho       | Coreia do Sul  | 2019 |
| Ponyo                  | Hayao Miyazaki     | Japão          | 2008 |
| O Tempo Com Você       | Makoto Shinkai     | Japão          | 2019 |

---

## 👨‍💻 Autor

**Augusto Oliveira**  
