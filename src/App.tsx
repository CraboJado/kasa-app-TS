
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './views/home/Home';
import RoutLayout from './layout/RoutLayout';
import ErrorPage from './views/error-page/ErrorPage';
import About from './views/about/About';
import Detail from './views/detail/Detail';
import { LodgesLoader } from "./views/home/loader";
import ErrorElement from "./components/errorElement/ErrorElement";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RoutLayout/>} >
      <Route index element= {<Home/>} loader={LodgesLoader} errorElement = {<ErrorElement/>}/>
      <Route path="about" element= {<About/>} />
      <Route path="detail/:id" element= {<Detail/>} loader={LodgesLoader} errorElement = {<ErrorElement/>}/>
      <Route path="*" element= {<ErrorPage/>} />
    </Route>
  )
)


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
