import React, { memo, useEffect, useState } from 'react'
import HomeContainer from './style'
import Banner from './banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

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

    </HomeContainer>
  )
})

export default Home