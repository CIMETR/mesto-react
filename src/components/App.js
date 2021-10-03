import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />

      <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={onCardClick}
      />

      <Footer />

  <PopupWithForm 
    name='profile' 
    title='Редактировать профиль' 
    buttonText='Сохранить'
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}>
        <input 
          name="userName" 
          type="text" 
          className="popup__item popup__item_edit_name" 
          id="sign-in-name"
          placeholder="Имя" 
          minLength="2" 
          maxLength="20"
          pattern="^[a-zA-Zа-яА-я-\s]+$"  
          required />
        <span className="popup__input-error " id="sign-in-name-error"></span>
        <input 
          name="userAbout" 
          type="text" 
          className="popup__item popup__item_edit_job" 
          id="sign-in-job"
          placeholder="Профессия" 
          minLength="2" 
          maxLength="100" 
          required />
        <span className="popup__input-error " id="sign-in-job-error"></span>
  </PopupWithForm>
 
  <PopupWithForm 
    name="card"
    title='Новое место'
    buttonText='Создать'
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}>
        <input 
          name="nameCard" 
          type="text" 
          className="popup__item popup__item_place_name" 
          id="sign-in-placename"
          placeholder="Название места" 
          minLength="2" 
          maxLength="20" 
          required />
        <span className="popup__input-error" id="sign-in-placename-error"></span>
        <input 
          name="link"  
          type="url" 
          className="popup__item popup__item_place_url" 
          id="sign-in-url"
          placeholder="Ссылка на картинку" 
          pattern="https://.*" 
          required />
        <span className="popup__input-error" id="sign-in-url-error"></span>
  </PopupWithForm>
  
  <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
  
  <div className="popup popup_confirm-delete">
    <div className="popup__case">
      <form className="popup__form">
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" className="popup__submit-button">Да</button>
      </form>
      <button className="popup__esc-button popup__esc-button_confirm-delete" type="button"></button>
  </div>
  </div>

  <PopupWithForm 
    name="avatar" 
    title='Обновить аватар'
    buttonText='Сохранить'
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}>
        <input 
          type="url" 
          className="popup__item popup__item_place_avatar" 
          name="avatar" 
          id="avatar" 
          placeholder="Ссылка на аватар" 
          required />
        <span className="popup__input-error" id="avatar-error"></span>
  </PopupWithForm>
</div>
  );
}

export default App;
