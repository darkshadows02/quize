// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import{createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Body from './Body';
import Singlecorrect from './Singlecorrect';
import Truefalse from './Truefalse';
import { Provider } from 'react-redux';
import appstore from './store/appstore';
   const Applayout=()=>{
        return (
          <div >
               <Header />
               <Outlet />
          </div>
        )
   }
 const approuter=createBrowserRouter([
      {
        path:'/',
        element:<Applayout />,
      children:[
     {
      path:'/',
      element:<Body/>
     },
     {
      path:'/singlecorrect',
      element: <Singlecorrect/>
     },
     {
       path:'/truefalse',
       element: <Truefalse/>
     }  
  ],
}
      
 ])
function App() {
  return (
    <> 
        {/* <Header /> */}
        
        <Provider store={appstore} > 
         <RouterProvider router={approuter} />
         </Provider>
        
    </>
     
  );
}

export default App;




















 