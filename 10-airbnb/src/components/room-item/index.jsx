import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItemContainer from './style'

const RoomItem = memo((props) => {
  const { item } = props

  return (
    <RoomItemContainer>
      {item.title}
    </RoomItemContainer>
  )
})

RoomItem.propTypes = {
  item: PropTypes.object
}

export default RoomItem