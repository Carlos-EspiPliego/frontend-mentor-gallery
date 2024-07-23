import { Route, Routes } from 'react-router-dom'
import { MainGalleryRoutes } from '../main-gallery/routes/MainGalleryRoutes'
import { PublicRoutes } from './PublicRoutes'

// Este router se encarga de enrutar la apliacación principal y tambiern
// de manejar el acceso publico y privado a las rutas
// en este caso no tenemos rutas privadas así que solo se encarga de enrutar a la principal
export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={
                <PublicRoutes>
                    <MainGalleryRoutes />
                </PublicRoutes>
            } />
        </Routes>
    )
}
