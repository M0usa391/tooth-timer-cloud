import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useState } from "react";

const Settings = () => {
  const { setTheme, theme } = useTheme();
  const [isArabic, setIsArabic] = useState(true);

  return (
    <div className="container mx-auto p-6 font-arabic">
      <h1 className="text-3xl font-bold mb-6 text-dental-600">الإعدادات</h1>
      
      <div className="grid gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>المظهر والتخصيص</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">الوضع الليلي</Label>
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="language">اللغة العربية</Label>
              <Switch
                id="language"
                checked={isArabic}
                onCheckedChange={setIsArabic}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;