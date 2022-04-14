import React, { useState, useContext, useEffect } from 'react'
import { CardListContext } from '../contexts/CardListContext'

const CardForm = () => {
  const { addCard, clearList, editTask, editItem } = useContext(CardListContext)
  const [title, setTitle] = useState('');
  const [validTrough, setValidThrough] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvv, setCvv] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addCard(title,validTrough,cardHolderName,cvv)
      setTitle('')
      setValidThrough('')
      setCardHolderName('')
      setCvv('')
    } else {
      editTask(title, editItem.id,validTrough,cardHolderName,cvv)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }
  const handleValidThrough = e => {
    setValidThrough(e.target.value)
  }
  const handleCardHoderName = e => {
    setCardHolderName(e.target.value)
  }
  const handleCVV = e => {
    setCvv(e.target.value)
  }

  const editHandler = () => {
      console.log("inside editHandler");
  }
  useEffect(() => {
    if (editItem) { console.log("inside useeffect");
      setTitle(editItem.title)
      setValidThrough(editItem.validTrough)
      setCardHolderName(editItem.cardHolderName)
      setCvv(editItem.cvv)
      console.log(editItem)
    } else {console.log("inside useeffect else");
      setTitle('')
      setValidThrough('')
      setCardHolderName('')
      setCvv('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit}>
       <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
            type="text"
            placeholder="Card Number..."
            value={title}
            onChange={handleChange}
            required
            className="task-input"
            />
        </div> 
        <div className="mb-3">
            <label className="form-label">Valid Through</label>
            <input
            type="text"
            placeholder="Valid Throug.."
            value={validTrough}
            onChange={handleValidThrough}
            required
            className="task-input"
            />
        </div> 
        <div className="mb-3">
            <label className="form-label">Card Holder Name</label>
            <input
            type="text"
            placeholder="Card Holder Nameg.."
            value={cardHolderName}
            onChange={handleCardHoderName}
            required
            className="task-input"
            />
        </div> 
        <div className="mb-3">
            <label className="form-label">CVV</label>
            <input
            type="text"
            placeholder="CVV.."
            value={cvv}
            onChange={handleCVV}
            required
            className="task-input"
            />
        </div> 
      
     
      
      <div className="buttons">
        <button type="submit" className="btn add-card-btn" onClick={editHandler}>
          {editItem ? 'Save Credit Card' : 'Save Credit Card'} 
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Remove All 
        </button>
      </div>
    </form>
  )
}

export default CardForm
