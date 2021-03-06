import React from 'react';

const Card = ({name, email, id, phone}) => {

  return (

    <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">

      <img src={`https://robohash.org/${id}?200x200" `} alt=""/>
        <div>
          <h2>{name} </h2>
          <p ><a href="mailto:{email}">{email}</a></p>
          <p>{phone}</p>
        </div>
    </div>
  )
}

export default Card;
