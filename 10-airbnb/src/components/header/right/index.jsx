import React, { memo, useState, useEffect } from 'react'
import { RightContainer } from './style'
import Language from '@/assets/svg/language'
import Menu from '@/assets/svg/meun'
import Avatar from '@/assets/svg/avatar'

const Right = memo(() => {
    const [showPanel, setShowPanel] = useState(false);

    const profileClickHandle = (e) => {
        setShowPanel(!showPanel);
    }

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.className !== 'profile') {
                setShowPanel(false);
            }
        }

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [showPanel])

    return (
        <RightContainer>
            <div className="buttons">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <Language />
                </span>
            </div>

            <div onClick={(e) => profileClickHandle(e)} className="profile">
                <Menu />
                <Avatar />

                {showPanel && (
                    <div className="panel">
                        <div className="top">
                            <div className="item reigster">注册</div>
                            <div className="item login">登录</div>
                        </div>
                        <div className="bottom">
                            <div className="item">出租房源</div>
                            <div className="item">开展体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightContainer>
    )
})

export default Right