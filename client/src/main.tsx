 import { StrictMode, Suspense } from "react"; 
import { createRoot } from "react-dom/client";
 import "./index.css";
 import App from "./App.tsx";
 import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Loader } from "./components/ui/Spinner.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { HelmetProvider } from "react-helmet-async";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
        <BrowserRouter>
         <HelmetProvider>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </HelmetProvider>
        </BrowserRouter>
        </ThemeProvider>
      </Provider>
  </StrictMode>
);
