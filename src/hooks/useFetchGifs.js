

import {useEffect, useState } from 'react'

import {getGifs  }  from '../services/giphy.api'

export const useFetchGifs = ( ) =>{


  let [search, setSearch] = useState('')
  let [loading, setLoading] = useState(false)
  let [gifs, setGifs] = useState([ ])


  useEffect(() => {
    fetchGifs('Saitama')
  }, [])
  
  const fetchGifs =  async (value) => {
    setLoading(true)
    let newGifts  =  await getGifs( value)
    setLoading(false)
    setGifs (newGifts)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    fetchGifs(search)
  }
  const onChangeSearchText = (value)=> {
    setSearch(value)
  }

  return {
    search,
    gifs, 
    loading,
    onSubmitForm,
    onChangeSearchText
  }

}
