import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './component'

const story = storiesOf('Header', module)

story.add('default', () => <Header />)
