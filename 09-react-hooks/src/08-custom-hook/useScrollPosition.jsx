import React, { memo, useEffect } from 'react'

function useScrollPosition() {
    const [scrollX, setScrollX] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return [scrollX, scrollY];
}

const Banner = memo(() => {
    const [x, y] = useScrollPosition()
    return (
        <h1 style={{ height: '200px' }}>Banner Component {x} - {y}</h1>
    )
})

const Footer = memo((props) => {
    const [x, y] = useScrollPosition()

    return (
        <h1 style={props.style}> Footer Component {x} - {y}</h1 >
    )
})

const App = memo(() => {
    return (
        <div style={{ height: '1000px' }}>
            <h2>useScrollPosition</h2>
            <Banner />
            <Footer style={{ height: '200px' }} />
        </div>
    )
})

export default App