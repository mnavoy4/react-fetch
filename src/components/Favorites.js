import React from 'react'
import CharacterCard from './CharacterCard'

export default function Favorites(props){
  
  const showFavorites = () => props.favorites.map(favorite => <CharacterCard character={favorite} />)
  return(
  <li className='favorites'>
    {showFavorites()}
  </li>
  )
}