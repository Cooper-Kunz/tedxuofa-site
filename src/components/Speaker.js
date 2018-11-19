import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Speaker extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: rhythm(2.5),
        }}
      >
        <img
          src={this.props.picture}
          alt={`TEDxUofA`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <p>
          <strong>{this.props.name}</strong>
          <br/>
          {this.props.bio}
        </p>
      </div>
    )
  }
}

export default Speaker
