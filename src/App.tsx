import { Suspense } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
