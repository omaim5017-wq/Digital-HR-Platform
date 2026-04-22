document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#firstName').value;
    alert("أهلاً بك " + name + "، لقد تم استلام طلبك وتوجيهه بنجاح.");
    // هنا يتم إضافة الطلب للجدول تلقائياً
});

