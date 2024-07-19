import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Index';
import Watch from './Pages/Watch/Index';
import PageNotFound from './Pages/PageNotFound/index.js';
import Search from './Pages/Search/index.js';

function AppRoutes(){
    return(<>

                <BrowserRouter>

                    <Routes>
                        <Route path= "/" element = {<Home/>}></Route>
                        <Route path= "/watch/:id" element = {<Watch/>}></Route>
                        <Route path= "/search" element = {<Search/>}></Route>
                        <Route path= "*" element = {<PageNotFound/>}></Route>
                        
                        
                    </Routes>
                
                </BrowserRouter>
    
           </>)
}

export default AppRoutes;