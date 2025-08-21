import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareerMatch from "./pages/CareerMatch";
import ParentPreferences from "./pages/ParentPreferences";
import StudentResults from "./pages/StudentResults";
import CareerSuggestions from "./pages/CareerSuggestions";
import CareerDetail from "./pages/CareerDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/career-match" element={<CareerMatch />} />
          <Route path="/parent-preferences" element={<ParentPreferences />} />
          <Route path="/student-results" element={<StudentResults />} />
          <Route path="/career-suggestions" element={<CareerSuggestions />} />
          <Route path="/career-detail/:id" element={<CareerDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
