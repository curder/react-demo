import React, { memo, useEffect, useState } from 'react'
import HomeContainer from './style'
import Banner from './banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import Section from '@/components/section'

const Home = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch]);

  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo, shallowEqual)

  console.log(goodPriceInfo)

  return (
    <HomeContainer>
      <Banner />


      <div className="content">
        <div className="good-price">
          <Section title="北京高分好评房源" subTitle="来看看大家都喜欢什么" />
        </div>
      </div>

    </HomeContainer>
  )
})

export default Home