import { Route, Routes } from "react-router-dom"
import { Footer, Header, PublicLayout } from "./layout"
import { Login } from "./pages"

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
