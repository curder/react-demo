import React, { memo } from 'react'
import { RightContainer } from './style'
import Language from '@/assets/svg/language'
import Menu from '@/assets/svg/meun'
import Avatar from '@/assets/svg/avatar'

const Right = memo(() => {
    return (
        <RightContainer>
            <div className="buttons">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <Language />
                </span>
            </div>

            <div className="profile">
                <Menu />
                <Avatar />
            </div>
        </RightContainer>
    )
})

export default Right