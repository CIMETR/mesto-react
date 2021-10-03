import React from 'react'

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return(
    <li className="card-grid__item">
        <img src={props.link} className="card-grid__image" alt={props.name} onClick={handleCardClick}/>
        <div className="card-grid__info">
          <h2 className="card-grid__title">{props.name}</h2>
          <div className="card-grid__like-container">
            <button type="button" className="card-grid__like" title="Оценить фотографию" aria-label="Оценить фотографию"></button>
            <span className="card-grid__like-count">{props.likes.length}</span>
          </div>
        </div>
        <button type="button" className="card-grid__remove"></button>
      </li>
  )
}

export default Card 