import { useState } from "react";
import "./App.css";


function App() {  
  const [bgColor, setBgColor] = useState("white");
  

  
  

  return (
    <div className="h-screen w-max" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setBgColor("red")}>Red</button>
      
    </div>
  );
}
export default App;
// App.css