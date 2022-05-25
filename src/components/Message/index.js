// base
import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

// components
import { ReactComponent as IconAvatar } from '../../public/icons/icon_bot.svg'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: '600px',
    marginBottom: '60px'
  },
  wrapperAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginRight: '16px',
    background: '#F5F5F5'
  },
  avatar: {
    width: '50%'
  },
  messageBlock: {
    borderRadius: '16px 16px 16px 0',
    padding: '19px 38px',
    background: '#F5F5F5'
  },
  username: {
    marginBottom: '5px',
    color: '#21978B'
  },
  message: {
    fontSize: '14px',
    lineHeight: '22px'
  }
}))

const Message = (props) => {
  const { message } = props
  const { user, text } = message

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapperAvatar}>
        <IconAvatar className={classes.avatar} />
      </div>
      <div className={classes.messageBlock}>
        <Typography component="div" className={classes.username}>{user}</Typography>
        <Typography component="div" className={classes.message}>{text}</Typography>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
