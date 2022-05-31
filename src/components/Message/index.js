// base
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// material-ui
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

// components
import { ReactComponent as IconAvatar } from '../../public/icons/icon_bot.svg'

const useStyles = makeStyles(() => ({
  wrapperRoot: {
    display: 'flex',
    marginBottom: '60px'
  },
  wrapperMyRoot: {
    justifyContent: 'flex-end'
  },
  marginBottom: {
    marginBottom: '6px'
  },
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: '600px'
  },
  myRoot: {
    maxWidth: '536px',
    marginLeft: '64px'
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
  myMessageBlock: {
    borderRadius: '16px 16px 0 16px',
    background: '#21978B'
  },
  username: {
    marginBottom: '5px',
    fontFamily: 'Prompt !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '22px !important',
    color: '#21978B'
  },
  message: {
    fontFamily: 'Prompt !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '22px !important'
  },
  myMessage: {
    color: '#FBFBFD'
  }
}))

const Message = (props) => {
  const { name, message, messages, index } = props
  const { user, text } = message
  const isMyMessage = name === user
  const lengthMessages = messages.length
  const isLastMessage = lengthMessages - 1 === index
  const isGroupMessage = isLastMessage
    ? false
    : messages[index + 1].user === user

  const classes = useStyles()

  return (
    <div className={classNames(
      classes.wrapperRoot,
      isMyMessage && classes.wrapperMyRoot,
      isGroupMessage && classes.marginBottom)}
    >
      <div className={classNames(classes.root, isMyMessage && classes.myRoot)}>
        {!isMyMessage && (
          <div className={classes.wrapperAvatar}>
            <IconAvatar className={classes.avatar} />
          </div>
        )}
        <div className={classNames(classes.messageBlock, isMyMessage && classes.myMessageBlock)}>
          {!isMyMessage && (
            <Typography
              component="div"
              className={classes.username}
            >
              {user}
            </Typography>
          )}
          <Typography
            component="div"
            className={classNames(classes.message, isMyMessage && classes.myMessage)}
          >
            {text}
          </Typography>
        </div>
      </div>
    </div>
  )
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

export default Message
