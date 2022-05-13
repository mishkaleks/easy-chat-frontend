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

- Настроить роутинг.

Компоннет `Home` используется при доступе к домашней странице и `Chat` при доступе к странице чата. На `Home` странице
`Link` с `react-router-dom` будет перенаправлять нас на `Chat` компонент указанной комнаты (передвая обязательные поля 
формы — `name` и `room`, в качестве параметров).

Установить необходимые зависимости:

`$ npm i prop-types classnames react-helmet use-debounce`

и зависимости для работы material-ui:

`$ npm i @mui/material @mui/styles @emotion/react @emotion/styled`

**Остальные этапы создания внешнего интерфейса будут добавляться по мере развития проекта*.
