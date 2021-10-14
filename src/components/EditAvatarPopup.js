import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
    avatarRef.current.value = ''
  }

  return (
    <PopupWithForm
      name="avatar" 
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
        onSubmit={handleSubmit}>
          <input 
            type="url" 
            className="popup__item popup__item_place_avatar" 
            name="avatar" 
            id="avatar" 
            placeholder="Ссылка на аватар" 
            required 
            ref={avatarRef}/>
          <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup