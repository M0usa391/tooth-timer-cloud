import { create } from 'zustand';

interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: Date;
  status: 'pending' | 'completed' | 'cancelled';
}

interface AppointmentStore {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'status'>) => void;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  deleteAppointment: (id: string) => void;
}

export const useAppointmentStore = create<AppointmentStore>((set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, { ...appointment, status: 'pending' }],
    })),
  updateAppointmentStatus: (id, status) =>
    set((state) => ({
      appointments: state.appointments.map((app) =>
        app.id === id ? { ...app, status } : app
      ),
    })),
  deleteAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((app) => app.id !== id),
    })),
}));