import { Route, Routes } from "react-router-dom";
import { Home, NewAssignment } from "./pages";
import { Navbar } from "./components";

function App() {
    return (
        <div className="h-full bg-gray-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/assignments/:id" element={<NewAssignment />} />
            </Routes>
        </div>
    );
}

export default App;
