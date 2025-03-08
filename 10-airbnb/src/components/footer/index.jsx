import React, { memo, useState } from 'react'
import { FooterContainer } from './style'
import footerJson from "@/assets/data/footer.json"


const Footer = memo(() => {
    const [data] = useState(footerJson)

    return (
        <FooterContainer>
            <div className='content'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.name}</h2>
                                <ul>
                                    {
                                        item.children.map((listItem, index) => {
                                            return (
                                                <li key={index} className='item'>{listItem}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
        </FooterContainer>
    )
})

export default Footer