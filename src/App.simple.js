
// هذا ملف JavaScript بسيط يمكن استخدامه مع index-simple.html

// التحقق من نموذج الحجز
function validateAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  if (!form) return;
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    
    if (!name || !phone || !service || !date) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    
    // يمكن هنا إضافة كود للتواصل مع API أو الخادم
    alert('تم حجز موعدك بنجاح! سنتواصل معك قريباً');
    form.reset();
  });
}

// إظهار وإخفاء القائمة في الشاشات الصغيرة
function setupMobileMenu() {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!menuButton || !mobileMenu) return;
  
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
}

// تنفيذ الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  validateAppointmentForm();
  setupMobileMenu();
});

