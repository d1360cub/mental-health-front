import React, { useState } from 'react'


function Pagination({card, setCard, maximo}) {
    const[numPage, setNumPage]=useState(1)
    const nextPage=()=>{
        setNumPage(numPage + 1);
        setCard(card + 1);
        
    }
    console.log(nextPage)
    const prevPage=()=>{
        setNumPage(numPage - 1);
        setCard(card - 1);
    }
    console.log()
  return (
    <div>
        
        <p onClick={prevPage}>Prev</p>
        <p>{numPage}</p>
        <p> de {maximo}</p>
        <p onClick={nextPage}> Next</p>
        
    </div>
  )
}

export default Pagination