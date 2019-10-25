import React from 'react';




function Header() {
  
  let headerStyles =  {
    backgroundColor: 'grey',
    gridColumn: "1 / 4",
    gridRow: "1 / 2",
    display: "flex",
    justifyContent: "space-between"
  };
  
  
  return (


    <div style={headerStyles}>
      <img className='headerpic' src="https://storage.googleapis.com/glaze-ecom.appspot.com/images/aArzUmE58/thumbs/232.png" alt=""/>
     <h1 className='headertitle'>Paper Planes Ultd.</h1>
     <ul className='headerlist'>
       <li>Home</li>
       <li>Products</li>
       <li>About</li>
     </ul>
    </div>   

  );
}

export default Header;