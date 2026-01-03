document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('privacy-modal');
    const closeBtn = document.getElementById('close-modal');

    // ตรวจสอบว่าเคยปิดป็อปอัพไปแล้วหรือยัง (ใช้ sessionStorage เพื่อให้แสดงใหม่เมื่อเปิดบราวเซอร์ใหม่)
    if (!sessionStorage.getItem('privacySeen')) {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        sessionStorage.setItem('privacySeen', 'true');
    });
});