import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Loader } from "./components/ui/Spinner.tsx";
import { HeadProvider } from 'react-head';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
           <HeadProvider>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
          </HeadProvider>
        </BrowserRouter>
      </Provider>
  </StrictMode>
);
