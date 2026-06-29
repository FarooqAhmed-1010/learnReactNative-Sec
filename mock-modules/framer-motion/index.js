import React from 'react'

const PresenceContext = React.createContext(null)

function usePresence() {
  return [true, null]
}

function AnimatePresence({ children }) {
  return children
}

export { PresenceContext, usePresence, AnimatePresence }
export default { PresenceContext, usePresence, AnimatePresence }
