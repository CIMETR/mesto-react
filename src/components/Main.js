import React from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike, handleCardDelete, cards}) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img src={currentUser.avatar} alt="Изображение профиля" className="profile__logo" />
          <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__button profile__button_type_edit" title="Редактировать профиль"
              aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__button profile__button_type_add" title="Добавить фото"
          aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>

      <section className="cards-grid">
        <ul className="card-grid">
        {
            cards.map((card) => (<Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            />))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main