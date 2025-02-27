import React, { memo, useEffect } from 'react'

function usePrintLifeCycle(componentName) {
    useEffect(() => {
        console.log(`${componentName} Component Mounted`)
        return () => {
            console.log(`${componentName} Component Unmounted`)
        }
    }, [])
}

const Banner = memo(() => {
    usePrintLifeCycle('Banner')
    return (
        <div>
            <h1>Banner Component</h1>
        </div>
    )
})

const Footer = memo(() => {
    usePrintLifeCycle('Footer')
    return (
        <div>
            <h1>Footer Component</h1>
        </div>
    )
})

const App = memo(() => {

    usePrintLifeCycle('App')

    const [bannerActive, setBannerActive] = React.useState(true)
    const [footerActive, setFooterActive] = React.useState(true)

    return (
        <div>
            <h1>App Component</h1>
            <button onClick={() => setBannerActive(!bannerActive)}>Toggle Banner</button>
            <button onClick={() => setFooterActive(!footerActive)}>Toggle Footer</button>
            {bannerActive && <Banner />}
            {footerActive && <Footer />}
        </div>
    )
})

export default App