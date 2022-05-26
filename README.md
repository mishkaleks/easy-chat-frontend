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
`Link` с `react-router-dom` будет перенаправлять нас на `Chat` компонент указанной "комнаты" (передвая обязательные поля 
формы — `name` и `room`, в качестве параметров).

Установить необходимые зависимости:

`$ npm i prop-types classnames react-helmet use-debounce`

и зависимости для работы material-ui:

`$ npm i @mui/material @mui/styles @emotion/react @emotion/styled`

- Подключить внешний интерфейс к серверной части.

Компонент `Chat` используется для подключения к серверу. `useLocation` c `react-router-dom` хранит информацию о 
url-адресе, который передаем с комплнента `App` в `Chat` используя роутинг.

```javascript
{
  hash: ""
  key: "kbwatlxp"
  pathname: "/chat"
  search: "?name=Tom&room=DevCamp"
  state: null
}
```

С помощью `queryString` мы получаем параметры `name` и `room`.

Создать экземпляр `socket` и передать конечную точку сервера.

```javascript
socket = io(ENDPOINT)
```

- Подключить пользователя к "комнате" и отправить приветственное сообщение.

Для подключение пользователя к комнате, необходимо отправить данные на сервер используя метод `emit()`. В качестве
первого параметра используется имя события. Чтобы отнести сокет к определенной "комнате" используется событие `join` и 
одноименный метод `join()` на серверной стороне, непосредственно для подключения к "комнате".

```javascript
socket.emit('join', { name, room }, (error) => {
  if (error) alert(error)
})
```

При установке соединения или при обмене сообщениями между клиентом и сервером генерируются события, их обрабатываем с 
помощью метода `on()` модуля socket.io.

Создать соединение с сервером для получения сообщений

```javascript
useEffect(() => {
  socket.on('message', (message) => {
    const updateMessages = [...messages, message]
    setState({ ...state, messages: updateMessages })
  })
}, [])
```

**Остальные этапы создания внешнего интерфейса будут добавляться по мере развития проекта*.
