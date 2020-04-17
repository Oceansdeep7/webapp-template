import React, {useContext} from "react"
import "./style.scss"
import Store from '../../custom-redux/store'

export default function Dashboard(props) {
  const {state, dispatch} = useContext(Store)
  return (
    <div className='dashboard'>
      这是首页
    </div>
  )
}
