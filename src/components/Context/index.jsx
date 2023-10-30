import { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Context.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </Context.Provider>
  );
}

export function useContext() {
  return useContext(Context);
}
