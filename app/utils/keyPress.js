export const onEnterKeyPress = callback => ev => {
  if (ev.key === 'Enter') {
    callback(ev)
  }
}
