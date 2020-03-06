import React, { useState } from 'react'
import { useDebounceEffect } from 'react-hooks'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [exampleValue, setExampleValue] = useState(textValue);

  useDebounceEffect(() => {
    setExampleValue(textValue);
  }, 2000, [textValue]);

  return (
    <div>
      <h2>Debounce Test</h2>
      <input type="text" value={textValue} onChange={e => setTextValue(e.currentTarget.value)} />
      <p>{textValue}</p>
      <p>{exampleValue}</p>
    </div>
  )
}
export default App