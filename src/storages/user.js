import { storageKeyConfig } from "@webcored/react-local-storage"

const user = storageKeyConfig({
  defaults: {
    name: 'Guest',
    email: 'guest@email.com'
  },

  version: 3,

  // assume version 1, has no default email
  migration: (currentValue, defaultValue) => {
    return {...currentValue, ...defaultValue }
  }
})

export {
  user
}