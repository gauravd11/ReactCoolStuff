import React, { useContext } from 'react'
import { CardListContext } from '../contexts/CardListContext'
import {Link} from 'react-router-dom'

const Card = ({ task, onClickTask }) => {
  const { removeTask, findItem } = useContext(CardListContext)

  function b(id) {
    onClickTask();
   findItem(id)
  }
  return (
    <li className="list-item">
      <div className='tasksDiv'>
        <p> </p>
        <p></p>
        <table className='table'>
        <tbody>
          <tr>
            <td><span style={{float:'left'}}>{task.cardHolderName} </span></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><span style={{float:'left'}}>{task.title} </span> </td>
            <td></td>
            <td><span>{task.validTrough} </span></td>
            <td>

              <div>
                <button
                  className="btn btn-danger"
                  style={{float:'right'}}
                  onClick={() => removeTask(task.id)}
                >
                  Delete
                </button>{' '}
                <Link to="/cardform">
                  <button className="btn btn-success" style={{float:'right'}} onClick={() => {b(task.id)}}>
                    Edit
                  </button>
                </Link>
                
              </div>
            </td>  
          </tr>
        </tbody>  
        </table>
      </div>
      
     
    </li>
  )
}

export default Card
