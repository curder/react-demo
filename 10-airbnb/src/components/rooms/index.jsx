import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import RoomsContainer from './style'
const Rooms = memo((props) => {

    const { goodPriceInfo = [] } = props
    console.log(goodPriceInfo)
    return (
        <RoomsContainer className='room-list'>
            {
                goodPriceInfo.map((item, index) => {
                    return (
                        <RoomItem key={item.acm} item={item} />
                    )
                })
            }
        </RoomsContainer>
    )
})

Rooms.propTypes = {
    goodPriceInfo: PropTypes.array
}

export default Rooms