import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, UserCog, Phone, Stethoscope, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "فحص الأسنان",
      icon: <Stethoscope className="w-12 h-12 text-dental-600" />,
      description: "فحص شامل لصحة الأسنان واللثة"
    },
    {
      title: "علاج تقويم الأسنان",
      icon: <Shield className="w-12 h-12 text-dental-600" />,
      description: "تقويم الأسنان بأحدث التقنيات"
    },
    {
      title: "مواعيد مرنة",
      icon: <Clock className="w-12 h-12 text-dental-600" />,
      description: "حجز المواعيد في أوقات تناسبك"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dental-50 to-dental-100 dark:from-gray-900 dark:to-gray-800">
      {/* Glass Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-arabic text-dental-800 dark:text-white">
            عيادة الأسنان المتخصصة
          </h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="glass-card hover-scale"
              onClick={() => navigate("/admin")}
            >
              <UserCog className="mr-2" />
              تسجيل الدخول
            </Button>
            <Button
              variant="outline"
              className="glass-card hover-scale"
              onClick={() => navigate("/book")}
            >
              <Calendar className="mr-2" />
              حجز موعد
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic dental-gradient inline-block text-transparent bg-clip-text">
            مرحباً بكم في عيادة الأسنان المتخصصة
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-arabic max-w-2xl mx-auto">
            نقدم أفضل خدمات طب الأسنان بأحدث التقنيات وأيدي متخصصة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-scale">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="font-arabic text-xl mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 font-arabic text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="glass-card hover-scale"
            onClick={() => navigate("/book")}
          >
            <Phone className="mr-2" />
            احجز موعدك الآن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;