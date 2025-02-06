import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Builder from "./pages/Builder";
import NotFound from "./pages/NotFound";
import { createSite } from "./lib/api";

const queryClient = new QueryClient();

const CreateSiteRedirect = async () => {
  try {
    const site = await createSite();
    return <Navigate to={`/builder/${site.id}`} replace />;
  } catch (error) {
    return <Navigate to="/" replace />;
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-site" element={<CreateSiteRedirect />} />
          <Route path="/builder/:siteId" element={<Builder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;