import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { NotFound } from '../components/NotFound/NotFound'
import { Loading } from '../components/Loading/Loading'

const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))

export const AppRouter = () => {
    return(
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    )
}