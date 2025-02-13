import { memo } from "react"
export const Banner = memo(function Banner(props) {
    const { message } = props

    console.log('Banner Component Rendered')
    return (
        <h2>Banner: {message}</h2>
    )
})

export default Banner