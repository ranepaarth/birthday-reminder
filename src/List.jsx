import React from 'react';
import data from './data.js'

const List = ({people}) => {
  return (
    <>
      {/* <h2>list component</h2> */}
      {people.map((data) => {
        const {id,name,age,image} = data;
        let hoverName = name;
        return(
          <article key={id} className='person'>
            <img src={image} alt={image}/>
            <div><h4>{name}</h4>
            <p>{age}</p></div>
          </article>  
        )
      })}
    </>
  );
};

export default List;