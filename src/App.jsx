import React from "react";
import LoadParent from "./Components/Loading/LoadParent";
import Home from "./Components/LandingPage/Home";
import MenuPage from "./Components/Menu/MenuPage";



function App() {
  const [menu, setmenu] = useState(false)

  return (
    <div className="h-screen  bg-[#111]">
       <MenuPage menu={menuOpen} setmenu={setmenuOpen}/>
      <LoadParent />
      <Home menu={menuOpen} setmenu={setmenuOpen} />
    </div>
  );
}

export default App;
