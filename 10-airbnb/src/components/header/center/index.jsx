import React, { memo } from 'react'
import { CenterContainer } from './style'
import SearchBar from '@/assets/svg/searchBar'

const Center = memo(() => {
    return (
        <CenterContainer>
            <div className="search-bar">
                <div className="text">搜索房源和体验</div>
                <div className="icon">
                    <SearchBar />
                </div>
            </div>
        </CenterContainer>
    )
})

export default Center 