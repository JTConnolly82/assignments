import React from 'react';
import superHeroes from './superheroes.json';
import Hero from './Hero';

const superContainer = () => {



 const mappedHeroes = superHeroes.map((hero)=>{
  return <Hero catchPhrase={hero.catchPhrase}
               key={Math.random() * 1000} 
               name={hero.name} 
               show={hero.show} 
               imgUrl={hero.imageName} />
 });


  return (
    <div>
      {mappedHeroes}
    </div>
  )
  
}

export default superContainer;