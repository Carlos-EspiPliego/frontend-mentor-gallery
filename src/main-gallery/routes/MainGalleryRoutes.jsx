import { Navigate, Route, Routes } from 'react-router-dom'
import { MainGalleryPage } from '../pages/MainGalleryPage'

export const MainGalleryRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainGalleryPage />} />

      <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}
