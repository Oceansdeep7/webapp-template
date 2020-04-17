import React from "react"
import {useHistory} from 'react-router-dom'
import './style.scss'
import errorImage from '../../assets/error.png'

export default function Error(props) {
  const history = useHistory();

  return (
    <div className='error'>
      <img className='image' src={errorImage}/>
      <div
        className='back'
        onClick={()=>history.goBack()}>
        返回
      </div>
    </div>
  )

}
