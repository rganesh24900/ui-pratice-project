import React from 'react'

function Title() {
    console.log('Rendering title')
  return (
    <div>useCallback and React Memo</div>
  )
}

export default React.memo(Title)