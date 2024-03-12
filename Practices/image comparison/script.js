var compare_slider = document.getElementById("compare_slider"),
    compare_box = document.getElementById("compare_box"),
    slider_custom_inner = document.getElementById("slider_custom_inner");

compare_box.style.width = (compare_slider.value + "%");

// setInterval(() => {

//     compare_box.style.width = (compare_slider.value + "%")
// }, 0);

compare_slider.addEventListener("input", () => {
    compare_box.style.width = (compare_slider.value + "%");
});

compare_slider.addEventListener("mouseenter", () => {
    slider_custom_inner.classList.add("slider_custom_inner_script");
    compare_slider.addEventListener("mouseout", () => {
        slider_custom_inner.classList.remove("slider_custom_inner_script")
    });
})