import {Route, Routes} from "react-router-dom";
import MainPopular from "../components/screns/Home/Main/MainPopular/MainPopular";
import MainDiscover from "../components/screns/Home/Main/MainDiscover/MainDiscover";
import MainProvide from "../components/screns/Home/Main/MainProvide/MainProvide";
import MainMap from "../components/screns/Home/Main/MainMap/MainMap";
function Router (){
    return (
        <Routes>
            <Route path='/#popular' element={<MainPopular />}/>
            <Route path='/#provide' element={<MainProvide />}/>
            <Route path='/#discover' element={<MainDiscover />}/>
            <Route path='/#map' element={<MainMap/>}/>
            <Route path='/#contact' element={<MainMap />}/>
        </Routes>
    )
}
export default Router;