const authForm = document.querySelector("section");
const authButton = document.querySelector(".authorization__button");
const inputs = document.querySelectorAll(".input");
const form = document.querySelector(".authorization");
const start = document.querySelector(".start");
const genders = document.querySelectorAll(".start__gender");
const quiz = document.querySelectorAll(".quiz");
const result = document.querySelector(".result");
const daysMenu = document.querySelectorAll(".days-menu");
const resultButton = document.querySelector(".result__button");
const calendar = document.querySelector(".calendar");
const profile = document.querySelector(".header__profile");
const menu = document.querySelector(".header__menu");
const arrow = document.querySelector(".header__arrow");
const calendarDay = document.querySelectorAll(".calendar__day");
const number = document.querySelector(".number");
let isInvalid = false;

const addActiveDay = (index) => {
    calendarDay.forEach((day, index) => {
        day.classList.remove("calendar__day-active")
    })
    calendarDay[index].classList.add("calendar__day-active")
}

inputs.forEach(inputElement => {
    if (!(inputElement.validity.valid)) {
        isInvalid = true;
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (isInvalid) {
        authForm.classList.toggle("none");
        start.classList.toggle("none");
        profile.classList.toggle("none")
    }
})

genders.forEach(gender => {
    gender.addEventListener("click", (e) => {
        start.classList.toggle("none");
        quiz[0].classList.toggle("none");
    })
})


quiz.forEach((item, index) => {
    item.querySelectorAll(".quiz__button").forEach(button => {
        button.addEventListener("click", () => {
            if (quiz[index + 1]) {
                item.classList.toggle("none")
                quiz[index + 1].classList.toggle("none");
            } else {
                quiz[quiz.length - 1].classList.toggle("none");
                result.classList.toggle("none");
            }
        })
    })

    item.querySelector(".quiz__back").addEventListener("click", () => {
        if (quiz[index - 1]) {
            item.classList.toggle("none")
            quiz[index - 1].classList.toggle("none");
        } else {
            quiz[0].classList.toggle("none");
            start.classList.toggle("none")
        }
    })
})

resultButton.addEventListener("click", () => {
    result.classList.toggle("none");
    daysMenu[0].classList.toggle("none")
    calendar.classList.toggle("none")
})

let currentDayIndex = 0;

daysMenu.forEach((item, index) => {
    daysMenu[0].querySelector(".back").setAttribute("disabled", "");

    item.querySelector(".next").addEventListener("click", () => {
        currentDayIndex++;
        number.textContent = currentDayIndex + 1;
        addActiveDay(currentDayIndex)
        if (daysMenu[index + 1]) {
            item.classList.toggle("none")
            daysMenu[index + 1].classList.toggle("none");
        }
    })

    item.querySelector(".back").addEventListener("click", () => {
        currentDayIndex--;
        number.textContent = currentDayIndex + 1;
        addActiveDay(currentDayIndex)
        if (daysMenu[index - 1]) {
            item.classList.toggle("none")
            daysMenu[index - 1].classList.toggle("none");
        }
    })

    if (!(daysMenu[index + 1])) {
        daysMenu[daysMenu.length - 1].querySelector(".next").setAttribute("disabled", "")
    }
})


profile.addEventListener("click", () => {
    menu.classList.toggle("active")
    arrow.classList.toggle("arrow-active")
})


calendarDay.forEach((day, index) => {
    day.addEventListener("click", () => {
        daysMenu.forEach((item) => {
            item.classList.add("none")
        })
        currentDayIndex = index;
        addActiveDay(currentDayIndex)
        number.textContent = currentDayIndex + 1;
        daysMenu[index].classList.remove("none")
    })
})