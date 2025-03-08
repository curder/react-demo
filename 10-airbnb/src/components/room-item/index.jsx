import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItemContainer from './style'

const RoomItem = memo((props) => {
  const { item } = props
  console.log(item)
  return (
    <RoomItemContainer>
      <div className="innter">
        <div className="cover">
          <img src={item.image} alt="" />
        </div>
        <div className="description">
          {["整套房子", "独立房间", "合住房间"].join(" · ")}
        </div>
        <div className="title">{item.title}</div>
        <div className="price">￥325/晚</div>
      </div>
    </RoomItemContainer>
  )
})

RoomItem.propTypes = {
  item: PropTypes.object
}

export default RoomItem