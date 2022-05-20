// base
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'

const Chat = () => {
  let socket
  console.log('socket > ', socket)
  const initialState = {
    name: '',
    room: ''
  }
  const ENDPOINT = 'http://localhost:5000'

  const location = useLocation()
  console.log('location > ', location)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(ENDPOINT)
    setState({ ...state, name, room })
  }, [location.search])

  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
