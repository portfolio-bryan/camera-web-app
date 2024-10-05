import { useRoutes, BrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Cameras } from './pages/Cameras'
import { CameraDetail } from './pages/CameraDetail'
import { Places } from './pages/Places'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Cameras /> },
    { path: '/camera-detail', element: <CameraDetail /> },
    { path: '/places', element: <Places /> },
    { path: '*', element: <NotFound /> },
  ])
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
