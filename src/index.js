import React from "react";
import ReactDom from "react-dom";
import HomeHeader from "./components/HomeHeader";


const App = () => {
return (
  <div >
    <div>

      <HomeHeader />
    </div>

  </div>
);

}

ReactDom.render(
<App/>,
document.querySelector('#root')

);
