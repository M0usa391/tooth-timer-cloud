import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, UserCog, Phone, Stethoscope, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 to-dental-100 dark:from-gray-900 dark:to-gray-800">
      {/* Glass Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-morphism neo-blur">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dental-600 dark:text-dental-400 font-arabic">
              صيدلية الشفاء
            </h1>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="hover-scale"
                onClick={() => navigate("/admin")}
              >
                <UserCog className="mr-2" />
                تسجيل الدخول
              </Button>
              <Button
                className="hover-scale dental-gradient text-white"
                onClick={() => navigate("/book")}
              >
                <Calendar className="mr-2" />
                حجز موعد
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 container mx-auto">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dental-700 dark:text-dental-300 font-arabic">
            مرحباً بكم في صيدلية الشفاء
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
            نقدم لكم أفضل الخدمات الصحية مع فريق متخصص من الصيادلة المحترفين
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Stethoscope className="h-8 w-8 text-dental-500" />,
              title: "استشارات صيدلانية",
              description: "استشارات متخصصة من صيادلة ذوي خبرة"
            },
            {
              icon: <Clock className="h-8 w-8 text-dental-500" />,
              title: "خدمة 24/7",
              description: "متواجدون على مدار الساعة لخدمتكم"
            },
            {
              icon: <Shield className="h-8 w-8 text-dental-500" />,
              title: "منتجات موثوقة",
              description: "أدوية ومستحضرات طبية معتمدة"
            },
            {
              icon: <Phone className="h-8 w-8 text-dental-500" />,
              title: "دعم فوري",
              description: "تواصل معنا في أي وقت للمساعدة"
            }
          ].map((service, index) => (
            <Card key={index} className="glass-card hover-scale">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl font-arabic">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-300 font-arabic">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;