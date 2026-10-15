import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Toaster, toast } from "react-hot-toast";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="min-h-screen bg-surface-app text-content-primary flex flex-col font-sans transition-colors duration-200">
      <Toaster position="top-right" />
      <Navbar />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 lg:pl-64 transition-all duration-300 px-4 py-2">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
