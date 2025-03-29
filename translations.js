const translations = {
    en: {
        home: "Home",
        login: "Login",
        signUp: "Sign Up"
    },
    ar: {
        home: "الرئيسية",
        login: "تسجيل الدخول",
        signUp: "إنشاء حساب"
    }
};

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    document.querySelectorAll(".translatable").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language-select").value = savedLang;
    changeLanguage(savedLang);
});

document.getElementById("language-select").addEventListener("change", function () {
    changeLanguage(this.value);
});
