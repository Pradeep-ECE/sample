import React from 'react'

function Content() {
    function handleNameChange(){
        const names=["pradeep","Nithish","Pradeep G"];
        const int=Math.floor(Math.random()*3);
        return names[int];
    }
  return (
    <p>hello {handleNameChange()}</p>
  )
}

export default Content