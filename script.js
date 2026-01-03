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
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // อนิเมชั่นปุ่ม Hamburger (ถ้าต้องการ)
    menuToggle.classList.toggle('is-active');
});

// ปิดเมนูเมื่อคลิกลิงก์ (สำหรับหน้าเว็บแบบ Single Page)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
