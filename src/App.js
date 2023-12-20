
import './App.css';
// import ComponentA from './useContext/ComponentA';
// import ComponentC from './ComponentC';
// import { useReducer } from 'react';
// import ComponentB from './ComponentB';
// import DataFetching from './datafetching/DataFetching';
// import ParentComp from './useCallBack/ParentComp';
import InputForm from './useInput/InputForm';

// export const CountContext = React.createContext();
function App() {

//   const initialState =0;
//   const reducer =(state,action)=>{
//     switch (action) {
//       case 'increment':
//         return state +1;
//       case 'decrement':
//         return state-1;
//       default:
//         return initialState;
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
       <InputForm/>
    </div>
  );
}

export default App;
