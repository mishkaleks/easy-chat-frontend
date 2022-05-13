// base
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// material-ui
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'

// components
import Typography from '@mui/material/Typography'
import InputComponent from '../../components/InputComponent'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '100vh'
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-216px)',
    padding: '0 30px'
  },
  header: {
    width: '100%',
    maxWidth: '475px',
    marginBottom: '30px'
  },
  title: {
    marginBottom: '15px !important',
    fontFamily: 'Prompt !important',
    fontWeight: '600 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important'
  },
  subTitle: {
    fontFamily: 'Prompt !important',
    fontWeight: '600 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    color: '#4F5665 !important'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px'
  },
  linkSignIn: {
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      textDecoration: 'none'
    }
  },
  disabledLink: {
    opacity: 0.3,
    cursor: 'auto'
  },
  signIn: {
    width: '100%',
    height: '60px',
    borderRadius: '24px !important',
    marginTop: '15px !important',
    background: '#21978B !important',
    fontFamily: 'Prompt !important',
    fontWeight: '600 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    color: '#fff !important'
  },
  customFormControlRoot: {
    height: '100px',
    margin: '0 !important'
  },
  customInputLabelRoot: {
    marginLeft: '5px !important',
    fontFamily: 'Prompt !important',
    fontWeight: '600 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    color: '#C7C3C3 !important'
  },
  customInputRoot: {
    border: '1px solid #E8E8E8 !important',
    borderRadius: '24px',
    fontFamily: 'Prompt !important',
    fontWeight: '600 !important',
    fontSize: '16px !important',
    lineHeight: '24px !important',
    color: '#C7C3C3 !important',
    '&:before': {
      borderBottom: 'none !important'
    },
    '&:after': {
      borderBottom: 'none !important'
    }
  },
  customTextHelper: {
    fontFamily: 'Prompt !important',
    fontWeight: '400 !important',
    fontSize: '10px !important',
    lineHeight: '100% !important'
  }
}))

const Home = (props) => {
  const { name, room, handleChangeField, handleSignIn } = props
  const nameError = name === ''
  const roomError = room === ''
  const isDisabled = !name || !room

  const classes = useStyles()

  const customInputStyles = {
    formControlRoot: classes.customFormControlRoot,
    inputLabelRoot: classes.customInputLabelRoot,
    inputRoot: classes.customInputRoot,
    textHelper: classes.customTextHelper
  }

  const fields = [
    {
      id: 'participantName',
      label: 'Name',
      component: InputComponent,
      customStyles: customInputStyles,
      handleChangeField: handleChangeField('name'),
      error: nameError,
      helperText: 'Name is required'
    },
    {
      id: 'roomName',
      label: 'Room',
      component: InputComponent,
      customStyles: customInputStyles,
      handleChangeField: handleChangeField('room'),
      error: roomError,
      helperText: 'Room is required'
    }
  ]

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography className={classes.title}>You don`t have a chat selected.</Typography>
          <Typography className={classes.subTitle}>Enter one of the existing chats or create a new one.</Typography>
        </div>
        <div className={classes.loginForm}>
          {
            fields.map((field, index) => {
              const { component, ...restProps } = field
              const Component = component

              return (
                <div key={index}>
                  <Component
                    {...restProps} // eslint-disable-line
                  />
                </div>
              )
            })
          }
          <Link
            onClick={(e) => handleSignIn(e)}
            to={`/chat?name=${name}&room=${room}`}
            className={classNames(classes.linkSignIn, isDisabled && classes.disabledLink)}
          >
            <Button
              type="submit"
              disabled={isDisabled}
              classes={{
                root: classes.signIn
              }}
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  name: PropTypes.string,
  room: PropTypes.string,
  handleChangeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired
}

export default Home
