import { Route, Routes } from "react-router-dom";
import { Classes, Home, NewAssignment, Progress } from "./pages";
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
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/assignments/new" element={<NewAssignment />} />
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
