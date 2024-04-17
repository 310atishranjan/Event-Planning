import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='banner'>
        <div className='title'>
          <h2>Event</h2>
          <p>Events and Wedding</p>
        </div>
        <div className='tag'>
          <label>NewsLetter</label>
        </div>
        <div>
        <input type='text' placeholder="email"/>
        <button>Subscribe</button>
        </div>
        <p>Signup with your email address to receive new and updates</p>
      </div>
    </footer>
  )
}

export default Footer