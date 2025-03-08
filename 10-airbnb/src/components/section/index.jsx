import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionContainer } from './style'

const Section = memo((props) => {
    const { title, subTitle } = props

    return (
        <SectionContainer>
            <h2 className="title">{title}</h2>
            {subTitle && <p className="sub-title">{subTitle}</p>}
        </SectionContainer>
    )
})

Section.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default Section