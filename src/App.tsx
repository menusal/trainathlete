import { useState, createContext, useMemo } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LazyLoadRoute from "./components/LazyLoadRoute";
import routes from './routes'
import { useRoutes } from "react-router-dom";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const routing = useRoutes(routes)
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#333",
          },
          secondary: {
            main: "#ccc",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LazyLoadRoute>{routing}</LazyLoadRoute>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
