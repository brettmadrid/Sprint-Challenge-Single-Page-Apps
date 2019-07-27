import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  //const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    // Axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
    Axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      //console.log('res.data', res.data)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [characters])

  return (
    <section className='character-list grid-view'>
      {characters.map((char)=>{
        return(
          <div>
            <CharacterCard char={char}/>
          </div>
        );
      })}
    </section>
  )
}
