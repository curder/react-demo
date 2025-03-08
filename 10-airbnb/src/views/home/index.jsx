import React, { memo, useEffect, useState } from 'react'
import request from '@/services'
import HomeContainer from './style'
import Banner from './banner'

const Home = memo(() => {
  const [banner, setBanner] = useState([])

  useEffect(() => {
    // 发送请求
    request.get({ url: '/home/multidata' })
      .then(res => {
        setBanner(res.data.banner)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <HomeContainer>
      <Banner />

      <ul>
        {banner?.list?.map(item => <li key={item.acm}>{item.title}</li>)}
      </ul>
    </HomeContainer>
  )
})

export default Home