import React from 'react'
import './index.scss'

const Games = props =>
  <main className='games page-wrapper'>
    <a href='https://dnd.wizards.com/articles/features/basicrules' target='_blank' rel='noopener noreferrer'>Dungeons and Dragons 5E</a>
    <a href='https://www.thelastofus.playstation.com/' target='_blank' rel='noopener noreferrer'>The Last of Us</a>
    <a href='https://www.stardewvalley.net' target='_blank' rel='noopener noreferrer'>Stardew Valley</a>
    <a href='https://rocksteadyltd.com' target='_blank' rel='noopener noreferrer'>Batman</a>
    <a href='https://fallout.bethesda.net/en/games/fallout-4' target='_blank' rel='noopener noreferrer'>Fallout 4</a>
    <a href='https://www.kingdomhearts.com' target='_blank' rel='noopener noreferrer'>Kingdom Hearts</a>
    <a href='https://insomniac.games/game/spider-man-ps4/' target='_blank' rel='noopener noreferrer'>Spider Man</a>
    <a href='https://braceyourselfgames.com/crypt-of-the-necrodancer/' target='_blank' rel='noopener noreferrer'>Crypt of the NecroDancer</a>
    <img alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x3_1.gif')} />
  </main>

export default Games
