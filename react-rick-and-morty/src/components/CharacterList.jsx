import {useEffect, useState} from 'react'
import Character from './Character';
function CharacterList(){
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
     async function fetchdata (){
     const response = await fetch('https://rickandmortyapi.com/api/character')
   const data = await response.json()
   setCharacters(data.results);
     }
     fetchdata()
    }, []);

    return (
        <div>
             {
      characters.map(character => {
        return (
          <Character/>
        );
      })
    }
        </div>
    )
}

export default CharacterList