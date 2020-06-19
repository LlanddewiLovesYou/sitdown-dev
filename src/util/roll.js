import { data } from '../data'

const roll = () => {
  const roll = Math.floor(Math.random() * 10)
  if(roll === 0) {
    return 10
  } else {
    return roll
  }
}

export const fetchSitDown = () => {
  console.log(window.localStorage['sitdown'])
  if(!window.localStorage['sitdown']) {
    window.localStorage.setItem('sitdown', JSON.stringify(data))
  }
  const localData = JSON.parse(window.localStorage.getItem('sitdown'))
  return localData[roll() - 1]
}
