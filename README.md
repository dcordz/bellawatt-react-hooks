# react-hooks

> A collection of hooks we find ourselves turning to in multiple projects

[![NPM](https://img.shields.io/npm/v/react-hooks.svg)](https://www.npmjs.com/package/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bellawatt/react-hooks
```

## Usage

### useDebounceEffect

```jsx
import React, { useState } from 'react'
import axios from 'axios';
import { useDebounceEffect } from '@bellawatt/react-hooks'

const DebounceEffectExample = () => {
  const [value, setValue] = useState('');

  useDebounceEffect(() => {
    someSlowFunction();
  }, 1000, [value]));

  return (
    <div>
      <input value={value} onChange={e => setValue(e.currentTarget.value)} />
    </div>
  )
}
```

### useToggle

```jsx
import React from 'react'
import { useToggle } from '@bellawatt/react-hooks'
import { Modal } from 'reactstrap'

const ToggleExample = () => {
  const [open, toggle] = useToggle(false)

  return (
    <Modal isOpen={open} toggle={toggle}>
      ...
    </Modal>
  )
}
```

### useLocalStorage

```jsx
import React from 'react'
import { useLocalStorage } from '@bellawatt/react-hooks'

const LocalStorageExample = () => {
  const [storedData, setStoredData] = useLocalStorage('name-of-key')

  // ..
}
```

### useGoogleAnalytics

** Requires a peer of react-router-dom and react-ga **

```jsx
import React from 'react'
import { useGoogleAnalytics } from '@bellawatt/react-hooks'

const GoogleAnalyticsExample = () => {
  useGoogleAnalytics('google-key')

  // ..
}
```

### useQueryString

** Requires a peer of react-router-dom **

```jsx
import React from 'react'
import { useQueryString } from '@bellawatt/react-hooks'

const QueryStringExample = () => {
  const [urlInputs, updateQueryString] = useQueryString()

  // ..
}
```

## License

MIT © [bellawatt](https://github.com/bellawatt)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
