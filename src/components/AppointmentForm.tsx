import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarIcon, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const services = [
  { id: 1, name: "فحص عام" },
  { id: 2, name: "تنظيف الأسنان" },
  { id: 3, name: "حشو الأسنان" },
  { id: 4, name: "تقويم الأسنان" },
  { id: 5, name: "علاج العصب" },
];

const AppointmentForm = () => {
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !name || !phone || !service) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    const appointment = {
      id: crypto.randomUUID(),
      name,
      phone,
      service,
      date,
    };

    // Send appointment to dashboard
    window.postMessage(appointment, "*");

    toast({
      title: "تم الحجز بنجاح",
      description: "سيتم التواصل معك قريباً",
    });

    // Reset form
    setName("");
    setPhone("");
    setService("");
    setDate(undefined);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-card backdrop-blur-lg bg-white/30 dark:bg-gray-800/30">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center font-arabic">عيادة د. شنونة</CardTitle>
          <p className="text-center text-muted-foreground font-arabic">احجز موعدك الآن</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                placeholder="الاسم الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 font-arabic"
              />
              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="relative">
              <Input
                placeholder="رقم الهاتف"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 font-arabic"
              />
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>

            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="font-arabic">
                <SelectValue placeholder="اختر الخدمة" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.name} className="font-arabic">
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-right font-arabic",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="ml-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: ar }) : "اختر التاريخ"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  locale={ar}
                />
              </PopoverContent>
            </Popover>

            <Button type="submit" className="w-full dental-gradient font-arabic hover:opacity-90 transition-opacity">
              تأكيد الحجز
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentForm;