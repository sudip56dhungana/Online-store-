import './App.css';
import MyRoutes from './MyRoutes';
// import { legacy_createStore } from 'redux';
//Createstore ->use to know for the compiler that any reducer is a store 
import { Provider } from 'react-redux';
//provider->to pass data from reducer to component 
// import cartReducer from './redux/reducers/cartReducer';
import store from './store';

const App=()=> {
  // const store =legacy_createStore(cartReducer)
  return (
 <Provider store={store}>

 <MyRoutes/>

 </Provider>

  );
}

export default App;