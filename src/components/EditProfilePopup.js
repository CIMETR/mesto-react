import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, props.isOpen])

  function handleNameChange(e) {
    setName(e.target.value)
  }
  
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateUser({
      name: name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      name='profile' 
      title='Редактировать профиль' 
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input 
        name="name" 
        type="text" 
        className="popup__item popup__item_edit_name" 
        id="sign-in-name"
        placeholder="Имя" 
        minLength="2" 
        maxLength="20"
        pattern="^[a-zA-Zа-яА-я-\s]+$"  
        required
        value={name || ''}
        onChange={handleNameChange} />
      <span className="popup__input-error " id="sign-in-name-error"></span>
      <input 
        name="about" 
        type="text" 
        className="popup__item popup__item_edit_job" 
        id="sign-in-job"
        placeholder="Профессия" 
        minLength="2" 
        maxLength="100" 
        required
        value={description || ''}
        onChange={handleDescriptionChange} />
      <span className="popup__input-error " id="sign-in-job-error"></span>
    </PopupWithForm>    
  )
}

export default EditProfilePopup