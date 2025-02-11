document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إرسال النموذج

    // الحصول على البريد الإلكتروني وكلمة المرور
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تخزين البيانات في localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    console.log('تم تسجيل الدخول:', email);

    // إخفاء نموذج تسجيل الدخول
    document.querySelector('.login-box').style.display = 'none';

    // عرض طلب صلاحية الوصول للصور والمقاطع
    document.getElementById('permission-request').style.display = 'block';
});

function grantAccess() {
    // الحصول على البريد الإلكتروني من localStorage
    const userEmail = localStorage.getItem('userEmail');

    // التحقق إذا كان البريد الإلكتروني هو البريد الخاص بالمشرف
    if (userEmail === "Awabx515@gmail.com") {
        alert('أنت المشرف! تم منحك الصلاحية الكاملة لرؤية الصور.');

        // إظهار الصور المحمية للمشرف
        document.getElementById('protected-images').style.display = 'block';
    } else {
        alert('تم منحك الوصول! يمكنك الآن رؤية الصور فقط.');
    }

    // إخفاء طلب الصلاحية بعد منح الوصول
    document.getElementById('permission-request').style.display = 'none';
}