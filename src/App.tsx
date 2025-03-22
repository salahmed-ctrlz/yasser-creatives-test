import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import SelectedWork from './pages/SelectedWork';
import ProjectDetail from './pages/ProjectDetail';
import LogoGallery from './pages/LogoGallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Router basename="/yasser-creatives-test">
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/selected-work" element={<SelectedWork />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/logos" element={<LogoGallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainLayout>
            </Router>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
