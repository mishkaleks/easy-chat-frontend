# Easy Chat Frontend

Frontend работает с [серверной частью](https://github.com/mishkaleks/easy-chat-backend).

## Основные этапы создания внешнего интерфейса

- Инициализировать React приложение.

`$ npx create-react-app easy-chat-frontend`

- Подключить конфигурацию `eslint-config-airbnb`.

`$ npm i eslint-config-airbnb`

Конфигурация содержит дополнительные правила для валидации кода.

- Установить дополнительные зависимости.

`$ npm i react-router socket.io-client query-string react-router-dom`

`Socket.io-client` — это зависимость, созданная `socket.io`, чтобы помочь подключиться к socket.io на сервере.

`Query-string` помогает получить параметр в нашем URL-адресе из адресной строки.

**Остальные этапы создания серверной части будут добавляться по мере развития проекта*.
