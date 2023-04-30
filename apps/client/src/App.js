import { Route, Routes } from "react-router-dom";
import {
    Calendar,
    Classes,
    Home,
    Login,
    NewAssignment,
    Progress,
} from "./pages";
import { Navbar } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-screen bg-gray-100">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route
                        path="/assignments/new"
                        element={<NewAssignment />}
                    />
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
