const skills = {
    ml: {
        title: "Machine Learning",
        description:
            "Изучаю машинное обучение на Python. " +
            "Работаю с pandas, scikit-learn, CatBoost " +
            "и подбором гиперпараметров."
    },

    frontend: {
        title: "Frontend",
        description:
            "Создаю сайты с помощью HTML, CSS и JavaScript. " +
            "Интересуюсь интерфейсами, адаптивным дизайном " +
            "и интерактивными веб-приложениями."
    },

    electronics: {
        title: "Электроника",
        description:
            "Экспериментирую с ESP32, датчиками, " +
            "RGB-светодиодами и Bluetooth. " +
            "Разрабатываю и тестирую электронные устройства."
    },

    backend: {
        title: "Backend",
        description:
            "Изучаю серверную логику приложений, " +
            "обработку данных и взаимодействие через API."
    }
};

const skillButtons = document.querySelectorAll(".skill-node");
const skillTitle = document.querySelector("#skill-title");
const skillDescription = document.querySelector("#skill-description");

skillButtons.forEach(button => {
    button.addEventListener("click", () => {
        const skillName = button.dataset.skill;
        const selectedSkill = skills[skillName];

        if (!selectedSkill || !skillTitle || !skillDescription) return;

        skillButtons.forEach(item => {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");

        skillTitle.textContent = selectedSkill.title;
        skillDescription.textContent = selectedSkill.description;
    });
});
