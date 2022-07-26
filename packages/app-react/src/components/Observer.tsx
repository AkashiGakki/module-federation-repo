/* eslint-disable no-console */
import observer from 'observer-emit'

function Observer() {
  observer.on('asuka', () => console.log('asuka', 1))
  observer.on('nagi', () => console.log('nagi'))

  observer.remove('asuka')
  observer.on('asuka', () => console.log('asuka', 2))

  observer.emit('asuka') // asuka 2
  observer.emit('nagi') // nagi

  observer.once('ume', () => console.log('ume'))
  observer.emit('ume') // ume
  observer.emit('ume')
  observer.emit('ume')

  return (<div>OBSERVER</div>)
}

export default Observer
