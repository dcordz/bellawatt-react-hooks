import React, { useState } from 'react'
import { useDebounceEffect, useToggle, useQueryString } from 'react-hooks'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [exampleValue, setExampleValue] = useState(textValue)
  const [onOff, toggle] = useToggle(false)
  const [queryString, updateQueryString] = useQueryString()

  useDebounceEffect(() => {
    setExampleValue(textValue)
    updateQueryString({text: textValue})
  }, 2000, [textValue])

  const addArray = () => updateQueryString({
    arr: [1, 2, 3]
  })

  const addObject = () => updateQueryString({
    obj: {color: 'green'}
  })

  return (
    <div>
      <h2>Debounce Test</h2>
      <input type="text" value={textValue} onChange={e => setTextValue(e.currentTarget.value)} />
      <p>{textValue}</p>
      <p>{exampleValue}</p>
      <h2>Toggle Test</h2>
      <button style={{width: '100px', height: '100px', backgroundColor: onOff ? 'green' : 'red'}} onClick={toggle}>{onOff ? 'On' : 'Off'}</button>

      <h2>Query String Test</h2>
      <button onClick={addArray}>Add an array</button>
      <button onClick={addObject}>Add an object</button>
      <p>{JSON.stringify(queryString)}</p>
    </div>
  )
}
export default App