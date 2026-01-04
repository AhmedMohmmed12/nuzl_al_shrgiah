import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero geometric-pattern">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-gradient mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          عذراً، الصفحة غير موجودة
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
