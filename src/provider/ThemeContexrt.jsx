import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();
export function ThemeComponent({ children }) {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };
  return (
    <ColorModeContext.Provider value={{ handleChange, checked }}>
      {children}
    </ColorModeContext.Provider>
  );
}
