import React from 'react'
import './index.scss'

const Contact = props =>
  <main className='contact mt-4'>
    <p>
      {'You can shoot me an email at: '} <a href='mailto:gamingeverafter@alemkin.com'>{'gamingeverafter@alemkin.com'}</a>
    </p>
    <p>
      {'You can also call or text me any time at '} <i>{'(555) 867-5309'}</i>
      <br />
      <sub><i>{'Please call me, I\'m so lonely'}</i></sub>
    </p>
  </main>

export default Contact
