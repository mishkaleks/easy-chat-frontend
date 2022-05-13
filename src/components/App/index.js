// base
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

// components
import Home from '../../pages/home/index'
import Chat from '../../pages/chat/index'

const App = () => {
  const initialValue = {
    name: null,
    room: null
  }

  const [state, setState] = useState(initialValue)

  const { name, room } = state

  const debounceCallback = useDebouncedCallback((type, value) => {
    setState({ ...state, [type]: value })
  }, 1000)

  const handleChangeField = (type) => (e) => {
    const value = e.target.value
    debounceCallback(type, value)
  }

  const handleSignIn = (e) => {
    const isDisabled = !name || !room
    return isDisabled ? e.preventDefault() : null
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <Home
              name={name}
              room={room}
              handleChangeField={handleChangeField}
              handleSignIn={handleSignIn}
            />
          </div>
        }
      />
      <Route
        path="/chat"
        element={
          <div>
            <Chat />
          </div>
        }
      />
    </Routes>
  )
}

export default App
