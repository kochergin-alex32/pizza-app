import React, {memo} from 'react'

const NotFound = memo(function () {
  return (
    <div className='notFound-wrapper'>
      <h1>
        <span>🤫</span>
      <br/>
      ничего не найдено
      </h1>
      <p >к соалению страница отсутствует</p>

    </div>
  )
})

export default NotFound