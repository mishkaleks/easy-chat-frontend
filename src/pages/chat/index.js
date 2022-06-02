// base
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

// material-ui
import { makeStyles } from '@mui/styles'

// components
import Message from '../../components/Message'
import SendingMessage from '../../components/SendingMessage'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  messageContainer: {
    flexGrow: 1,
    padding: '60px 36px',
    overflowY: 'auto',
    '@media only screen and (max-width: 575px)': {
      padding: '30px 12px'
    }
  },
  wrapperSendingMessage: {
    flexShrink: 0,
    padding: '12px 38px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)'
  }
}))

let socket

const Chat = () => {
  const classes = useStyles()

  const initialState = {
    name: '',
    room: '',
    textMessage: ''
  }
  const ENDPOINT = 'http://localhost:5000'

  const location = useLocation()
  const [state, setState] = useState(initialState)
  const [messages, setMessages] = useState([])
  const { name, textMessage } = state

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(ENDPOINT)
    setState({ ...state, name, room })

    socket.emit('join', { name, room }, (error) => {
      if (error) alert(error)
    })
  }, [location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  const handleChangeMessage = (e) => {
    const value = e.target.value
    setState({ ...state, textMessage: value })
  }

  const handleSendMessage = () => {
    if (textMessage) {
      socket.emit('sendMessage', { textMessage })
      return setState({ ...state, textMessage: '' })
    }
    return alert('input is empty')
  }

  return (
    <div className={classes.root}>
      <div className={classes.messageContainer}>
        {
          messages.map((message, index) => {
            return (
              <Message
                key={index}
                name={name}
                message={message}
                messages={messages}
                index={index}
              />
            )
          })
        }
      </div>
      <div className={classes.wrapperSendingMessage}>
        <SendingMessage
          textMessage={textMessage}
          handleChangeMessage={handleChangeMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  )
}

export default Chat
