// base
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const FontLoader = (props) => {
  const { fontFamily } = props

  return (
    <Helmet>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${fontFamily}:200,400,600,800&display=swap`}
      />
    </Helmet>
  )
}

FontLoader.propTypes = {
  fontFamily: PropTypes.string.isRequired
}

export default FontLoader
