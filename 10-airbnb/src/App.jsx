import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/routes'
import Header from '@/components/header'
import Footer from '@/components/footer'

const App = memo(() => {
    return (
        <div className='app'>
            <Header />
            <div className="contant">
                {useRoutes(routes)}
            </div>
            <Footer />
        </div>
    )
})

export default App