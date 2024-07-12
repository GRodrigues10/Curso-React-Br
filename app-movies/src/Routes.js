import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Index';
import Watch from './Pages/Watch/Index';

function AppRoutes(){
    return(<>

                <BrowserRouter>

                    <Routes>
                        <Route path= "/" element = {<Home/>}></Route>
                        <Route path= "/watch" element = {<Watch/>}></Route>
                    </Routes>
                
                </BrowserRouter>
    
           </>)
}

export default AppRoutes;