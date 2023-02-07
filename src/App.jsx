import BoxQuote from "./components/BoxQuote"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "./data/data";

function App() {
  const dispatch=useDispatch();
  const state=useSelector(state=>state);
  console.log("State",state)
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <div className="App bg-page w-full h-screen flex flex-col items-center justify-center">
      <BoxQuote dispa={dispatch} initState={state}/>
    </div>
  )
}

export default App
