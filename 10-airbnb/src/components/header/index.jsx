import React, { memo } from 'react'
import HeaderContainer from './style'
import Left from './left'
import Center from './center'
import Right from './right'

const Header = memo(() => {
    return (
        <HeaderContainer>
            <Left />
            <Center />
            <Right />
        </HeaderContainer>
    )
})

export default Header