# 🦇 Bat-Signal App

Aplicativo desenvolvido em **React Native + Expo**, que simula o acionamento do **Bat-Sinal** e abre um formulário para envio de informações.

---

## 📌 Funcionalidades
- Exibição do **Bat-Sinal** na tela inicial.
- Botão interativo **"Activate Bat-Signal"** com efeito de clique.
- Exibição condicional de um **formulário** com os campos:
  - Nome
  - Telefone
  - Localização
  - Observações (textarea)
- Alerta de sucesso ao enviar as informações.

---

## 🛠️ Tecnologias utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (para desenvolvimento e testes)
- **Hooks** (`useState`) para gerenciamento de estado
- **Pressable** para botões interativos
- **TextInput** com suporte a `multiline`
- **Alert** para mensagens de confirmação

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- Expo CLI instalada globalmente:
  ```bash
  npm install -g expo-cli
