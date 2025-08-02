// import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react"
import { Routes, Route } from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={HomePage />} />
        <Route path="/auth-callback" element={AuthCallbackPage />} />
      </Routes>
    </>
  )
}

export default App
