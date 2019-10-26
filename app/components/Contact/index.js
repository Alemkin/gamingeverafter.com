import React from 'react'

const Contact = props =>
  <main className='contact page-wrapper mt-4'>
    <p>
      {'You can shoot me an email at: '} <a href='mailto:gamingeverafter@alemkin.com'>{'gamingeverafter@alemkin.com'}</a>
    </p>
    <p>
      {'You can also call or text me any time at '} <i>{'(555) 867-5309'}</i>
      <br />
      <sub><i>{'Please call me, I\'m so lonely'}</i></sub>
    </p>
    <img alt='Pixel version of Alex floating while holding a book and twirling a d20' src={require('../../../images/Nacho_x3_1.gif')} />
  </main>

export default Contact
