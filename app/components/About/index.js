import React from 'react'
import './index.scss'

const About = props =>
  <main className='about mt-4 page-wrapper'>
    <div className='about-title-wrapper'>
      <img className='about-title' alt='Pixel version of Alex floating while holding a book and twirling a d20' src={require('../../../images/Nacho_x2_2.gif')} />
      <h2 className='about-title'>About Us</h2>
      <img className='about-title' alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x2_3.gif')} />
    </div>
    <br />
    <p>
      {'Welcome to Gaming Ever After: A website dedicated to posts about games we play together, as husband and wife.'}
    </p>
    <p>
      {'This will be a one stop shop for articles on any gaming for any platform that my wife and I play together. This includes but is not limited to games on consoles and table top games.'}
    </p>
    <p>
      {'A sample of a few games we have played and play regularly together is first and foremost, Dungeons and Dragons 5E. I can not stress this enough, but there will be a lot of articles on our play sessions in D&D. Beyond that we play mostly on the PS4 and Nintendo Switch, and have played the following games, among others: Kingdom Hearts, Spiderman, Fallout 4, The Rocksteady Batman Trilogy, The Last of Us, The Wolf Among Us, Crpyt of the Necrodancer, and Stardew Valley.'}
    </p>
  </main>

export default About
