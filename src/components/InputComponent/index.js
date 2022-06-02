// base
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// material-ui
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'

const useStyles = makeStyles(() => ({
  formControlRoot: {
    margin: '15px 0'
  },
  inputLabelRoot: {
    marginLeft: '0px'
  },
  inputRoot: {
    height: '60px',
    padding: '12px 15px'
  },
  textHelper: {
    color: '#d32f2f !important'
  }
}))

const InputComponent = (props) => {
  const { error, helperText, customStyles = {}, handleChangeField, ...restProps } = props

  const classes = useStyles()

  return (
    <TextField
      fullWidth
      variant="standard"
      error={error}
      helperText={error && helperText}
      onChange={handleChangeField}
      classes={{ root: classNames(classes.formControlRoot, customStyles.formControlRoot) }}
      InputLabelProps={{
        shrink: true,
        classes: { root: classNames(classes.inputLabelRoot, customStyles.inputLabelRoot) }
      }}
      InputProps={{
        classes: { root: classNames(classes.inputRoot, customStyles.inputRoot) }
      }}
      FormHelperTextProps={{
        classes: { root: classNames(classes.textHelper, customStyles.textHelper) }
      }}
      {...restProps} // eslint-disable-line
    />
  )
}

InputComponent.propTypes = {
  customStyles: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  handleChangeField: PropTypes.func.isRequired
}

export default InputComponent
