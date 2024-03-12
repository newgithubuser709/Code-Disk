let doc_hours = document.getElementById("doc_hours");
let doc_minutes = document.getElementById("doc_minutes");
let doc_seconds = document.getElementById("doc_seconds");

doc_hours.innerHTML = "2";
doc_minutes.innerHTML = "2";
doc_seconds.innerHTML = "10";

let timer = setInterval(my_timer, 1000);
let timer_end = () => {
    clearInterval(timer);
}

if (doc_hours.innerHTML < 10) {
    doc_hours.innerHTML = ("0" + doc_hours.innerHTML);
};
if (doc_minutes.innerHTML < 10) {
    doc_minutes.innerHTML = ("0" + doc_minutes.innerHTML);
};

function my_timer() {

    if (doc_hours.innerHTML == "00" && doc_minutes.innerHTML == "00" && doc_seconds.innerHTML == "00") {

        doc_hours.innerHTML = "00";
        doc_minutes.innerHTML = "00";
        doc_seconds.innerHTML = "00";
        timer_end();

    } else if (doc_hours.innerHTML > "00" && doc_minutes.innerHTML == "00") {

        doc_minutes.innerHTML = "2";
        doc_minutes.innerHTML = ("0" + doc_minutes.innerHTML);

        doc_seconds.innerHTML = "10";

        doc_hours.innerHTML = doc_hours.innerHTML - 1;
        doc_hours.innerHTML = ("0" + doc_hours.innerHTML);

    } else
        if (doc_minutes.innerHTML > "00" && doc_seconds.innerHTML == "00") {

            doc_minutes.innerHTML = doc_minutes.innerHTML - 1;
            doc_minutes.innerHTML = ("0" + doc_minutes.innerHTML);

            doc_seconds.innerHTML = "10";

        } else {

            doc_seconds.innerHTML = doc_seconds.innerHTML - 1;
            doc_seconds.innerHTML = ("0" + doc_seconds.innerHTML);
        }
}