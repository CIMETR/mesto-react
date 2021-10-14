import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === currentUser._id
  const isLiked = props.card.likes.some((item) => item._id === currentUser._id)
  const cardDeleteButtonClassName = (
    `card-grid__remove ${isOwn ? '' : 'card-grid__remove_disabled'}`
  )
  const cardLikeButtonClassName  = (
    `card-grid__like ${isLiked ? 'card-grid__like_target_active' : ''}`
  )



  function handleCardClick() {
    props.onCardClick(props.card)
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return(
    <li className="card-grid__item">
        <img src={props.card.link} className="card-grid__image" alt={props.card.name} onClick={handleCardClick}/>
        <div className="card-grid__info">
          <h2 className="card-grid__title">{props.card.name}</h2>
          <div className="card-grid__like-container">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} title="Оценить фотографию" aria-label="Оценить фотографию"></button>
            <span className="card-grid__like-count">{props.card.likes.length}</span>
          </div>
        </div>
        <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      </li>
  )
}

export default Card 