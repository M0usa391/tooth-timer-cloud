import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Settings, UserCog } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dental-50 to-dental-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-arabic dental-gradient inline-block text-transparent bg-clip-text">
            عيادة الأسنان المتخصصة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            نقدم أفضل خدمات طب الأسنان بأحدث التقنيات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Button
            variant="outline"
            className="glass-card hover-scale h-40 flex flex-col items-center justify-center gap-4 p-8"
            onClick={() => navigate("/book")}
          >
            <Calendar className="h-12 w-12 text-dental-600" />
            <span className="text-xl font-arabic">حجز موعد</span>
          </Button>

          <Button
            variant="outline"
            className="glass-card hover-scale h-40 flex flex-col items-center justify-center gap-4 p-8"
            onClick={() => navigate("/admin")}
          >
            <UserCog className="h-12 w-12 text-dental-600" />
            <span className="text-xl font-arabic">دخول المسؤول</span>
          </Button>

          <Button
            variant="outline"
            className="glass-card hover-scale h-40 flex flex-col items-center justify-center gap-4 p-8"
            onClick={() => navigate("/settings")}
          >
            <Settings className="h-12 w-12 text-dental-600" />
            <span className="text-xl font-arabic">الإعدادات</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;