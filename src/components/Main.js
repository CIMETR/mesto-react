import React from 'react'
import { api } from '../utils/Api'
import Card from './Card'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('sadf')
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
      api.getUserInfo().then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data.map((item) => ({
        id: item._id,
        link: item.link,
        name: item.name,
        likes: item.likes
      })))
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img src={userAvatar} alt="Изображение профиля" className="profile__logo" />
          <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__button profile__button_type_edit" title="Редактировать профиль"
              aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__button profile__button_type_add" title="Добавить фото"
          aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>

      <section className="cards-grid">
        <ul className="card-grid">
        {
            cards.map(({id, ...props}) => (<Card key={id} {...props}
            card={ {id, ...props} }
            onCardClick={onCardClick}
            />))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main