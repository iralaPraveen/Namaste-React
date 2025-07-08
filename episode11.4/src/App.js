import { createContext, useState } from "react";
import Count from "./components/Count";  
import Items from "./components/Items";

 export const store = createContext();
function App() {
  const [data, setData] = useState([
    { brandname: "OPPO" },
    { brandname: "VIVO" },
    { brandname: "SAMSUNG" },
  ]);
  return (
    <store.Provider value={[data,setData]}>
      <Count/>
      <Items/>
   </store.Provider>
  );
}

export default App;
