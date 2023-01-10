### `toast-aura allows you to create notification in 5 steps`

## Installation

```
npm i toast-lib-react
yarn add toast-lib-react
```

## Features

- Settings of toast place
- Settings of toast appearance animation
- Settings of toast title
- Settings of toast message
- Settings of toast type
- Settings of autoClose ability and time

## Example

```
import { ToastPortal, useToastRef } from 'toast-lib-react'

const SuccessSettings = {
  title: 'Success',
  mode: 'success',
  message: 'This is example of success toast',
  animationType: 'move',
  position: 'topRight',
}

const PortalSettings = {
  autoClose: false,
  autoCloseTime: 3000,
  position: 'topRight',
  margin: 'none',
}

export const Example = () => {

  const { toastRef, addToast } = useToastRef()

  const addSuccess = () => addToast({
    ...SuccessSettings })

  return (
    <>
      <button onClick={addSuccess}> Test Success Toast</button>
      <ToastPortal ref={toastRef} {...PortalSettings} />
    </>
  )
}

```
## Available settings

### Toast:

- `title` - string
- `mode` - 'info', 'success', 'warning', 'error'
- `message` - string
- `backgroundColor` - string
- `animationType` - 'scale', 'move'
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'

### TaostPortal:

- `autoClose` - boolean
- `autoCloseTime` - number
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'
- `margin` - 'none', 'small', 'medium', 'large'

## Enjoy
Create by BirmiiYo 