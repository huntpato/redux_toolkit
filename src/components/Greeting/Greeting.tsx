import React from 'react'
import styles from './Greeting.module.css'

const Greeting = () => {

    const { title} =  styles;

  return (
    <h2 className={title}>↑ Pick your choice ↑</h2>
  )
}

export default Greeting