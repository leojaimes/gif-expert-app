
import AddCategory from "./components/AddCategory"
import GitGrid from "./components/GitGrid"
import { useFetchGifs  }  from './hooks/useFetchGifs'
const GiftExpertApp = () => {

  let { 
    onSubmitForm,
    onChangeSearchText,
    search , 
    gifs, 
    loading, 
  } = useFetchGifs()
 

  return (
    <>
      <h2>GiftExpertApp</h2>
      <form onSubmit={onSubmitForm}>
        <AddCategory
          value={search}
          onChange={onChangeSearchText}
        />
      </form>
      <GitGrid gifs = { gifs} loading= { loading } /> 
      <hr />
    </>
  )
}

export default GiftExpertApp