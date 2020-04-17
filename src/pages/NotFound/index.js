import React from "react"
import useTitle from "../../hooks/useTitle";
import "./style.scss"

export default function NotFound(props) {
  useTitle("404");
  return (
    <div className='not-found'>
      <p className='state'>404</p>
      <p className='text'>This page could not be found</p>
    </div>
  )
}
