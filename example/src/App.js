import React, { useState } from 'react'
import { useDebounceEffect, useToggle } from 'react-hooks'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [exampleValue, setExampleValue] = useState(textValue);
  const [onOff, toggle] = useToggle(false);

  useDebounceEffect(() => {
    setExampleValue(textValue);
  }, 2000, [textValue]);

  return (
    <div>
      <h2>Debounce Test</h2>
      <input type="text" value={textValue} onChange={e => setTextValue(e.currentTarget.value)} />
      <p>{textValue}</p>
      <p>{exampleValue}</p>
      <h2>Toggle Test</h2>
      <button style={{width: '100px', height: '100px', backgroundColor: onOff ? 'green' : 'red'}} onClick={toggle}>{onOff ? 'On' : 'Off'}</button>
    </div>
  )
}
export default App