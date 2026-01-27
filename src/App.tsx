import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExternalRedirect from "./components/ExternalRedirect";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/join" element={<ExternalRedirect to="https://forms.gle/CKv3xLR3ZjubuHdV6" />} />
      <Route path="/actors" element={<ExternalRedirect to="https://forms.gle/fFTMXbxYG65brXY88" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
