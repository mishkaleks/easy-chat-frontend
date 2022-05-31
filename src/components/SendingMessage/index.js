// base
import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'

// components
import InputComponent from '../InputComponent'
import { ReactComponent as IconSend } from '../../public/icons/icon_send.svg'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  formControlRoot: {
    margin: '0 40px 0 0 !important'
  },
  inputRoot: {
    border: '1px solid #E8E8E8 !important',
    borderRadius: '24px',
    padding: '12px 26px',
    '&:before': {
      borderBottom: 'none !important'
    },
    '&:after': {
      borderBottom: 'none !important'
    }
  },
  sendButton: {
    '&:hover, &:focus, &:active': {
      backgroundColor: 'transparent !important'
    }
  }
}))

const SendingMessage = (props) => {
  const { textMessage, handleChangeMessage, handleSendMessage } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <InputComponent
        id="input-send-message"
        value={textMessage}
        variant="standard"
        placeholder="Start a new message"
        handleChangeField={handleChangeMessage}
        classes={{ root: classes.formControlRoot }}
        InputProps={{
          classes: {
            root: classes.inputRoot
          }
        }}
      />
      <IconButton
        onClick={handleSendMessage}
        classes={{
          root: classes.sendButton
        }}
      >
        <IconSend />
      </IconButton>
    </div>
  )
}

SendingMessage.propTypes = {
  textMessage: PropTypes.string,
  handleChangeMessage: PropTypes.func.isRequired,
  handleSendMessage: PropTypes.func.isRequired
}

export default SendingMessage
