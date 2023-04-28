import React from 'react'

const Header = ({data, setData, name, setName}) => {



console.log(data);

  return (
    <div style={{height: 300, backgroundColor:'orange'}}>
        DATA:

        <input value={data} onChange={(e) => setData(e.target.value)}/>
        <h1>{data}</h1>
    
    </div>
  )
}

export default Header