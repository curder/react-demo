import React, { memo, useEffect, useState } from 'react'
import request from '@/services'

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
    <div>
      Home
      <ul>
        {banner?.list?.map(item => <li key={item.acm}>{item.title}</li>)}
      </ul>
    </div>
  )
})

export default Home