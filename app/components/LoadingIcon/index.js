import React, { useEffect } from 'react'
import './index.scss'

const icons = ['d20', 'ellen', 'heart', 'nacho', 'controller', 'headset', 'cartridge', 'nes_controller']

let index = 0
const changeIcon = () => {
  for (let i = 0; i < icons.length; i++) {
    const currentElement = document.getElementsByClassName(icons[i])[0]
    if (!currentElement) return
    if (i === index) {
      currentElement.style.display = 'inherit'
    } else {
      currentElement.style.display = 'none'
    }
  }
  index = index === 7 ? 0 : index + 1
}

const LoadingIcon = () => {
  useEffect(() => {
    const id = window.setInterval(changeIcon, 200)

    return () => {
      window.clearInterval(id)
      index = 0
    }
  })

  return (
    <div className='gaming-loader-overlay'>
      <img className='d20' alt='A pixel d20' src={require('../../../images/d20.png')} />
      <img className='ellen' alt='Pixel Ellen head' src={require('../../../images/ellen.png')} />
      <img className='heart' alt='Pixel heart' src={require('../../../images/heart.png')} />
      <img className='nacho' alt='Pixel Alex head' src={require('../../../images/nacho.png')} />
      <img className='controller' alt='Pixel game controller' src={require('../../../images/controller.png')} />
      <img className='headset' alt='Pixel headset' src={require('../../../images/headset.png')} />
      <img className='cartridge' alt='Pixel game cartridge' src={require('../../../images/cartridge.png')} />
      <img className='nes_controller' alt='Pixel Nes Controller' src={require('../../../images/nes_controller.png')} />
      <div className='loading-text'>LOADING</div>
    </div>
  )
}

export default LoadingIcon
