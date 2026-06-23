/* =========================
   LIBRARY DASHBOARD APP
========================= */

console.log("Library Dashboard Loaded");

/* =========================
   API STATUS CHECK
========================= */

async function checkApi() {

    const status =
        document.getElementById(
            "apiStatus"
        );

    if (!status) return;

    try {

        const response =
            await fetch(
                "http://localhost:5000/api/books"
            );

        if (response.ok) {

            status.innerHTML =
                "🟢 Connected";

            status.style.color =
                "green";

        } else {

            status.innerHTML =
                "🟠 Server Error";

            status.style.color =
                "orange";

        }

    }

    catch (error) {

        status.innerHTML =
            "🔴 Offline";

        status.style.color =
            "red";

        console.log(error);

    }

}

/* Run API Check */

checkApi();

/* Repeat Every 5 Seconds */

setInterval(
    checkApi,
    5000
);

/* =========================
   LOADING SPINNER
========================= */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById(
                "loader"
            );

        if (!loader) return;

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 1000);

    }
);

/* =========================
   DARK MODE
========================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body
                .classList
                .toggle("dark");

        }
    );

}

/* =========================
   ACTIVITY LOGGER
========================= */

function addActivity(message) {

    const activityList =
        document.getElementById(
            "activityList"
        );

    if (!activityList) return;

    const li =
        document.createElement("li");

    li.innerText =
        `${new Date().toLocaleTimeString()} - ${message}`;

    activityList.prepend(li);

}

/* Example */

addActivity(
    "Dashboard Loaded"
);