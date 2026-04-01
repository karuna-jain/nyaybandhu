import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";
import Department from "./pages/about/Department";
import AboutUs from "./pages/about/AboutUs";
import History from "./pages/about/History"; // Import the History component
import Cases from "./pages/cases";
import Services from "./pages/services";
import VisionMission from "./pages/about/VisionMission";
import Departments from "./pages/about/Departments";
import Resources from "./pages/resources";
import Contacts from "./pages/contact";
import News from "./pages/news";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/department" element={<Department />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/VisionMission" element={<VisionMission />} />
          <Route path="/about/functionofDepartments" element={<Departments />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;