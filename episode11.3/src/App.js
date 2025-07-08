import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { useState, createContext } from "react";
export const store = createContext();

function App() {
  const [data, setData] = useState(0);
  return (
    <store.Provider value={[data, setData]}>
      <h1>Hello friends Implementing Context API</h1>
      <ComponentA />
      <ComponentB />
      <button onClick={() => setData(data + 1)}>Increment</button>
      <button onClick={() => setData(data - 1)}>Increment</button>
    </store.Provider>

  );
}

export default App;
