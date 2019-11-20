import React from 'react';
import UglyComponent from './UglyComponent';


const UglyList = (props) => {
  console.log(props)
  
  let uglyThingComponents = props.theUglyThings.map((uglyThing)=>{
    return <UglyComponent key={Math.random()*10000}
                          uglyId={Math.floor(Math.random()*10000)}
                          url={uglyThing.url} 
                          title={uglyThing.title} 
                          description={uglyThing.description}
                          handleDelete={}
                           />
  });

  return (
    <div className='ugly-list-wrap'>
      {uglyThingComponents}
    </div>
  )
}


export default UglyList;