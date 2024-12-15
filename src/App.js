import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserProfilePage from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
