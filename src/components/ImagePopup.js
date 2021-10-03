
function ImagePopup(props) {
  
  return (
    <div className={`popup popup_zoom-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img
            src={props.card ? props.card.link : '#'}
            className="popup__image"
            alt={props.card ? props.card.name : ''}
          />
          <figcaption
            className="popup__caption">
              {props.card ? props.card.name : ''}
          </figcaption>
        </figure>
        <button
          type="button"
          className="popup__esc-button popup__esc-button_zoom-image"
          onClick={props.onClose}
        >
        </button>
      </div>
    </div>
  )
}

export default ImagePopup