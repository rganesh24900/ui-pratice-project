import axios from 'axios'
import React, { useEffect ,useReducer} from 'react'

function DataFetching() {
    const initialState={
      loading:true,
      post:{},
      error:''
    }
    const reducer = (state,action)=>{
          switch (action.type) {
            case 'FETCH_SUCCESS':
              return {
                loading:false,
                post:action.payload,
                error:''
              }        
            case 'FETCH_FAILED':
              return {
                loading:false,
                post:{},
                error:'An error occured while fetching data'
              }
            default:
              return state;
          }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {   
      axios.get('http://jsonplaceholder.typicode.com/posts/1')
           .then(
            data=>dispatch({payload:data.data,type:'FETCH_SUCCESS'})
           )
           .catch(
            error=>dispatch({type:'FETCH_FAILED'})
           )
    }, [])
    
  return (
    <div>
      {state.loading?<p>Loading</p> :<p>{state.post.title}</p>}
      <p>{state.error}</p>
    </div>
  )
}

export default DataFetching