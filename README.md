### `toast-aura`
 This package will allow you to add custom notifications very simply and with a wide range of settings.

## Preparing for use

```
npm i toast-aura
yarn add toast-aura
```

## Functionality:

- Show notification.
- Ability to set notification position.
- Ability to set notification type (success notification, error notification, alert, etc.).
- Ability to set the duration of the notification.
- Ability to set the title and description of the notification.
- Ability to set notification indents.
- Ability to change the color of the notification type.
- The ability to change the animation of appearance and disappearance.
- Display up to 3 notifications at the same time.

## Example of usage

```
import {useToast, ToastContainer} from 'toast-aura/lib'

// add success toast
const SuccessSettings = {
  title: 'Success',
  mode: 'success',
  description: 'success toast',
  animationType: 'move',
}
// add error toast
const ErrorSettings = {
    title: 'Error',
    mode: 'error',
    description: 'error toast',
    animationType: 'scale',
}
// add warning toast
const WarningSettings = {
    title: 'Warning',
    mode: 'warning',
    description: 'Warning toast',
    animationType: 'scale',
}
// add info toast
const InfoSettings = {
    title: 'Info',
    mode: 'info',
    description: 'Info toast',
    animationType: 'scale',
    backgroundColor:'gray',
}

// settings for container  
const ContainerSettings = {
  autoClose: true,
  autoCloseTime: 3000,
  position: 'topLeft',
  margin: 'small',
}

export const Aura = () => {

  const { toastRef, addToast } = useToast()

  const addSuccess = () => addToast({
    ...SuccessSettings })
  const addWarning = () => addToast({
    ...WarningSettings })
  const addInfo = () => addToast({
    ...InfoSettings })
  const addError = () => addToast({
    ...ErrorSettings })

  return (
    <>
      <button onClick={addSuccess}> Test Success Toast</button>
      <button onClick={addWarning}> Test Warning Toast</button>
      <button onClick={addInfo}> Test Info(w bgColor) Toast</button>
      <button onClick={addError}> Test Error Toast</button>
      <ToastContainer ref={toastRef} {...ContainerSettings} />
    </>
  )
}
```

## Available settings

### For Toast:

- `title` -  string
- `mode` - 'info', 'success', 'warning', 'error'
- `message` - string
- `backgroundColor` - string
- `animationType` - 'scale', 'move'
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'

### For ToastContainer:

- `autoClose` - boolean
- `autoCloseTime` - number
- `position` - 'topRight', 'topLeft', 'bottomRight', bottomLeft'
- `margin` - 'none', 'small', 'medium', 'large'

## Enjoy 
created by BirmiiiYo
