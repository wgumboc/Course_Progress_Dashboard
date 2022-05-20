import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const DeStress = () => {
  const url ='https://random.dog/woof.json'
  //const url ='https://aws.random.cat/meow'
  const [animal, setAnimal] = useState(null)

  let content = null

  useEffect(() => {
    axios.get(url)
        .then(response => {
            setAnimal(response.data)
        })
 
  }, [url])

  if(animal){
    content = <div className="animal"><img className="animalimg" src={animal.url} alt="animal" /></div>
  } else {
    content = <div>Unable to load</div>
  }

  return (
    <div>{content}</div>
  )
}

export default DeStress