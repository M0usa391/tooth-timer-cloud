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

interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: Date;
}

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // محاكاة استلام الحجوزات في الوقت الفعلي
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
    <div className="container mx-auto p-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-arabic text-center">لوحة التحكم</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
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