import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <PopupWithForm
      name="card"
      title='Новое место'
      buttonText='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
          <input 
            name="nameCard" 
            type="text" 
            className="popup__item popup__item_place_name" 
            id="sign-in-placename"
            placeholder="Название места" 
            minLength="2" 
            maxLength="20" 
            required 
            onChange={handleNameChange}/>
          <span className="popup__input-error" id="sign-in-placename-error"></span>
          <input 
            name="link"  
            type="url" 
            className="popup__item popup__item_place_url" 
            id="sign-in-url"
            placeholder="Ссылка на картинку" 
            pattern="https://.*" 
            required 
            onChange={handleLinkChange}/>
          <span className="popup__input-error" id="sign-in-url-error"></span> 
    </PopupWithForm>
  )
}

export default AddPlacePopup