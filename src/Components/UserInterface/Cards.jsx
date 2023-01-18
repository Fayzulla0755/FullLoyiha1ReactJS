import React from 'react'

export default function Cards({post}) {
  const {title,comment,country,prise}=post
  return (
    <div className="card text-white bg-dark m-3" style={{width: '18rem'}}>
      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <p className="card-text comment">{comment}</p>
        <h5 className="card-text country">{country}</h5>
        <h5 className="price">{prise}</h5>
      </div>
    </div>
  )
}
