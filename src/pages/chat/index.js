// base
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

// material-ui
import { makeStyles } from '@mui/styles'

// components
import Message from '../../components/Message'

const useStyles = makeStyles(() => ({
  root: {
    padding: '60px 36px'
  }
}))

const Chat = () => {
  const classes = useStyles()

  let socket
  const initialState = {
    name: '',
    room: '',
    messages: []
  }
  const ENDPOINT = 'http://localhost:5000'

  const location = useLocation()
  const [state, setState] = useState(initialState)
  const { messages } = state

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
      const updateMessages = [...messages, message]
      setState({ ...state, messages: updateMessages })
    })
  }, [])

  return (
    <div className={classes.root}>
      {
        messages.map((message, index) => {
          return (
            <Message key={index} message={message} />
          )
        })
      }
    </div>
  )
}

export default Chat
