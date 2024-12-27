import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Calendar, Users, Clock, CheckCircle } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: Date;
}

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const handleNewAppointment = (event: MessageEvent) => {
      const appointment = JSON.parse(event.data);
      setAppointments(prev => [...prev, appointment]);
    };

    window.addEventListener('message', handleNewAppointment);
    
    return () => {
      window.removeEventListener('message', handleNewAppointment);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center font-arabic mb-8">عيادة د. شنونة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="glass-card hover-scale">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium font-arabic">إجمالي المواعيد</p>
              <p className="text-2xl font-bold">{appointments.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-dental-600" />
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium font-arabic">المرضى</p>
              <p className="text-2xl font-bold">{appointments.length}</p>
            </div>
            <Users className="h-8 w-8 text-dental-600" />
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium font-arabic">مواعيد اليوم</p>
              <p className="text-2xl font-bold">
                {appointments.filter(a => 
                  format(new Date(a.date), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                ).length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-dental-600" />
          </CardContent>
        </Card>

        <Card className="glass-card hover-scale">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium font-arabic">مكتملة</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <CheckCircle className="h-8 w-8 text-dental-600" />
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-arabic text-center">المواعيد</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right font-arabic">الاسم</TableHead>
                  <TableHead className="text-right font-arabic">رقم الهاتف</TableHead>
                  <TableHead className="text-right font-arabic">الخدمة</TableHead>
                  <TableHead className="text-right font-arabic">التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-arabic">{appointment.name}</TableCell>
                    <TableCell className="font-arabic">{appointment.phone}</TableCell>
                    <TableCell className="font-arabic">{appointment.service}</TableCell>
                    <TableCell className="font-arabic">
                      {format(new Date(appointment.date), 'PPP', { locale: ar })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;