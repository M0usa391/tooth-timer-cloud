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
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Calendar, Users, Clock, CheckCircle, XCircle, Archive } from "lucide-react";
import { useAppointmentStore } from "@/store/appointmentStore";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { appointments, updateAppointmentStatus, deleteAppointment } = useAppointmentStore();
  const { toast } = useToast();

  const handleStatusUpdate = (id: string, status: 'completed' | 'cancelled') => {
    updateAppointmentStatus(id, status);
    toast({
      title: status === 'completed' ? "تم إكمال الموعد" : "تم إلغاء الموعد",
      description: "تم تحديث حالة الموعد بنجاح",
    });
  };

  const handleDelete = (id: string) => {
    deleteAppointment(id);
    toast({
      title: "تم الحذف",
      description: "تم حذف الموعد بنجاح",
    });
  };

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
              <p className="text-2xl font-bold">
                {appointments.filter(a => a.status === 'completed').length}
              </p>
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
                  <TableHead className="text-right font-arabic">الحالة</TableHead>
                  <TableHead className="text-right font-arabic">الإجراءات</TableHead>
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
                    <TableCell className="font-arabic">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-sm",
                        {
                          "bg-yellow-100 text-yellow-800": appointment.status === 'pending',
                          "bg-green-100 text-green-800": appointment.status === 'completed',
                          "bg-red-100 text-red-800": appointment.status === 'cancelled',
                        }
                      )}>
                        {appointment.status === 'pending' && 'قيد الانتظار'}
                        {appointment.status === 'completed' && 'مكتمل'}
                        {appointment.status === 'cancelled' && 'ملغي'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleStatusUpdate(appointment.id, 'completed')}
                          className="text-green-600 hover:text-green-700"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleStatusUpdate(appointment.id, 'cancelled')}
                          className="text-red-600 hover:text-red-700"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(appointment.id)}
                          className="text-gray-600 hover:text-gray-700"
                        >
                          <Archive className="h-4 w-4" />
                        </Button>
                      </div>
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