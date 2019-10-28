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
    <img alt='Alex dressed as Ash from Pokemon, tossing a pokeball up and down with a vulpix by his legs' src={require('../../../images/poke_x3.gif')} />
  </main>

export default Contact
