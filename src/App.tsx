import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartProvider } from "./contexts/CartContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartProvider>
          <Router />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
