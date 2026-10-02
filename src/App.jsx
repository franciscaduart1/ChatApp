import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactInfo from "./pages/ContactInfo";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/contact/:contactId" element={<ContactInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
