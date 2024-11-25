import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={() => <HomePage />} />
          <Route path={"/contact"} Component={() => <ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
