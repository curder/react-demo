import React, { memo } from 'react'
import { LeftContainer } from './style'
import Logo from '@/assets/svg/logo'

const Left = memo(() => {
    return (
        <LeftContainer>
            <div className="logo">
                <Logo />
            </div>
        </LeftContainer>
    )
})

export default Left