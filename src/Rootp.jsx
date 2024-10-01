import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import App from "./App";
const Rootp = () => {
  return (
<BrowserRouter basename={"/as_ads/"}>
<Routes>

<Route path="/" element={<App/>}/>
</Routes>
</BrowserRouter>
  )
}

export default Rootp
