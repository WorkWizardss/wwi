import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const WebServices = lazy(() => import("./pages/WebServices"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const MaintenanceSupport = lazy(() => import("./pages/MaintenanceSupport"));
const Products = lazy(() => import("./pages/Products"));
const Team = lazy(() => import("./pages/Team"));
const CareersApply = lazy(() => import("./pages/CareersApply"));
const CareersPage = lazy(() => import("./pages/Careers"));
const Partners = lazy(() => import("./pages/Partners"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/web" element={<WebServices />} />
            <Route path="/services/app" element={<AppDevelopment />} />
            <Route path="/services/maintenance" element={<MaintenanceSupport />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/apply" element={<CareersApply />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
