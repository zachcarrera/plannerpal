import { Route, Routes } from "react-router-dom";
import {
    Calendar,
    Classes,
    Home,
    Login,
    NewAssignment,
    Progress,
    Register,
} from "./pages";
import { Navbar, RequireAuth } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <div className="h-screen bg-gray-100">
                    <Navbar />
                    <Routes>
                        {/* public routes */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* protected routes */}
                        <Route element={<RequireAuth />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/classes" element={<Classes />} />
                            <Route path="/progress" element={<Progress />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route
                                path="/assignments/new"
                                element={<NewAssignment />}
                            />
                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
