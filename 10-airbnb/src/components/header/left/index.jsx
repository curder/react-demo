import React, { memo } from 'react'
import { LeftContainer } from './style'
import Logo from '@/assets/svg/logo'

const Left = memo(() => {
    return (
        <LeftContainer>
            <Logo />
        </LeftContainer>
    )
})

export default Left