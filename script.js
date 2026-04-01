document.addEventListener('DOMContentLoaded', () => {

    // ========== 1. ОБРАТНАЯ СВЯЗЬ ==========
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackMsg = document.getElementById('feedbackMessage');
    if (feedbackBtn && feedbackMsg) {
        feedbackBtn.addEventListener('click', () => {
            feedbackMsg.classList.remove('hidden');
            setTimeout(() => {
                feedbackMsg.classList.add('hidden');
            }, 2000);
        });
    }

    // ========== 2. ЯСНОСТЬ И ПРОСТОТА ==========
    const badBtn = document.getElementById('showBadClarity');
    const goodBtn = document.getElementById('showGoodClarity');
    const clarityContainer = document.getElementById('clarityExample');

    const badFormHTML = `
        <div class="bad-form">
            <div class="form-row">
                <label>Введите данные</label>
                <input type="text" placeholder="...">
            </div>
            <div class="form-row">
                <label>Ещё данные</label>
                <input type="text" placeholder="...">
            </div>
            <button class="secondary-btn" style="width:100%">Продолжить</button>
            <p style="font-size:0.75rem; margin-top:0.5rem; color:#b91c1c;">*Заполните все поля. Непонятные подписи.</p>
        </div>
    `;
    const goodFormHTML = `
        <div class="good-form">
            <div class="form-row">
                <label>Имя</label>
                <input type="text" placeholder="Иван">
            </div>
            <div class="form-row">
                <label>Email</label>
                <input type="email" placeholder="ivan@example.ru">
            </div>
            <button class="primary-btn" style="width:100%">Зарегистрироваться</button>
            <p style="font-size:0.75rem; margin-top:0.5rem; color:#15803d;">Чёткие подписи и логичная группировка.</p>
        </div>
    `;

    function setActiveButton(active) {
        if (active === 'good') {
            goodBtn.classList.add('active');
            badBtn.classList.remove('active');
        } else {
            badBtn.classList.add('active');
            goodBtn.classList.remove('active');
        }
    }

    if (badBtn && goodBtn && clarityContainer) {
        badBtn.addEventListener('click', () => {
            clarityContainer.innerHTML = badFormHTML;
            setActiveButton('bad');
        });
        goodBtn.addEventListener('click', () => {
            clarityContainer.innerHTML = goodFormHTML;
            setActiveButton('good');
        });
        clarityContainer.innerHTML = goodFormHTML;
        goodBtn.classList.add('active');
    }

    // ========== 3. КОНТРОЛЬ ПОЛЬЗОВАТЕЛЯ ==========
    const controlInput = document.getElementById('controlInput');
    const sendControl = document.getElementById('sendControlBtn');
    const resetControl = document.getElementById('resetControlBtn');
    const controlMsgDiv = document.getElementById('controlMessage');

    if (controlInput && sendControl && resetControl && controlMsgDiv) {
        sendControl.addEventListener('click', () => {
            const val = controlInput.value.trim();
            if (val) {
                controlMsgDiv.textContent = `✓ Сохранено: "${val}"`;
                controlMsgDiv.classList.remove('hidden');
            } else {
                controlMsgDiv.textContent = '⚠ Введите текст перед отправкой.';
                controlMsgDiv.classList.remove('hidden');
            }
        });
        resetControl.addEventListener('click', () => {
            controlInput.value = '';
            controlMsgDiv.classList.add('hidden');
        });
    }

    // ========== 4. ВИЗУАЛЬНАЯ ИЕРАРХИЯ ==========
    // уже полностью в CSS

    // ========== 5. СОГЛАСОВАННОСТЬ ==========
    // карточки уже реализованы

    // ========== 6. ПРЕДОТВРАЩЕНИЕ ОШИБОК ==========
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const registerForm = document.getElementById('registerForm');

    function validateEmail(email) {
        const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return re.test(email);
    }

    function validateForm() {
        let isValid = true;
        const email = emailField.value.trim();
        const password = passwordField.value;

        if (!validateEmail(email)) {
            emailError.textContent = 'Введите корректный email (например, name@domain.ru)';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (password.length < 6) {
            passwordError.textContent = 'Пароль должен содержать не менее 6 символов';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        submitBtn.disabled = !isValid;
        return isValid;
    }

    if (emailField && passwordField && submitBtn) {
        emailField.addEventListener('input', validateForm);
        passwordField.addEventListener('input', validateForm);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm()) {
                alert('Регистрация успешна! (демонстрация)');
                registerForm.reset();
                submitBtn.disabled = true;
                emailError.textContent = '';
                passwordError.textContent = '';
            }
        });
    }

    // ========== МОБИЛЬНОЕ МЕНЮ ==========
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
});