import React from 'react'

const CreateList = (props) => {
  const { list, symbol } = props
  return (
    <>
    {list.map(item => {
      return (
      <span key={item}>{symbol} {item} <br/></span>
      )
    })}
    </>
  )
}

export default CreateList;
