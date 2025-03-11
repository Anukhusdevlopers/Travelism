import React from 'react'
import './SttartingPopup.css'
import img from '../../../assets/PopupStart.jpg'
import { X } from 'lucide-react'

const StartingPopup = ({ onclose }) => {
  return (
    <div className="modal-overlay" onClick={onclose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onclose} className="close-button">
            <X size={22} />
          </button>
        </div>
        <img src={img} alt="Popup" className="modal-image" />
      </div>
    </div>
  )
}

export default StartingPopup
