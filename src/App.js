
import { Provider } from "react-redux";
import "./App.css";
import Body from "./componnet/Body";
import Header from "./componnet/Header";
import appstore from "./utils/Appstore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./componnet/Maincontainer";
import Watchpage from "./componnet/Watchpage";
 const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
   {
    path:"/",
    element:<Maincontainer/>

   } ,
   {
path:"watch",
element:<Watchpage/>
   }
  ]
 }])

function App() {
  return (
    <Provider store ={appstore}>
    <div className="">
      {/* <h1>YouTube🌠</h1> */}
      <Header/>
    <RouterProvider router ={appRouter}/>
      
      
    </div>

    </Provider>
  );
}

export default App;
