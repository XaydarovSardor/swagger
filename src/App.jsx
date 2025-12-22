import { Toaster } from 'react-hot-toast';
import { AppProviders } from "../AppProviders";
import { Router } from "../router/router";
function App() {

  return (
    <>
      <AppProviders>
        <Router/>
      </AppProviders>
      <Toaster position="top-center" />
    </>
  )
}

export default App
