import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './tedxuofa-profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          marginTop: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`TEDxUofA`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          TEDxUofA is coming in Spring 2019. Please {' '}
          <a href="https://twitter.com/tedxuofa" style={{ color: 'red' }}>
            follow us on Twitter
          </a>
          {' '}
          or,
          {' '}
          <a href="https://www.facebook.com/tedxuofa/" style={{ color: 'red' }}>
            give us a like on Facebook
          </a>. Stay tuned for our 2019 theme reveal!
        </p>
      </div>
    )
  }
}

export default Bio
