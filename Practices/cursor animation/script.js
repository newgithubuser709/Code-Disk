var CursorContainer = document.getElementById("CursorContainer"),
    cursor = document.getElementById("cursor");

CursorContainer.addEventListener("mousemove", (e) => {
    var x = (e.pageX);
    var y = (e.pageY);
    cursor.style.left = (x - 15 + "px");
    cursor.style.top = (y - 13 + "px");

});

CursorContainer.addEventListener("mouseover", () => {
    cursor.style.opacity = 100;
    cursor.style.visibility = "visible";
});
CursorContainer.addEventListener("mouseout", () => {
    cursor.style.opacity = 0;
    cursor.style.visibility = "hidden";
});


CursorContainer.addEventListener("click", () => {
    cursor.classList.add("cursor_click_script");

    setTimeout(() => {
        cursor.classList.remove("cursor_click_script");
    }, 500);
});


// curser hover animations 

var test_li_01 = document.getElementById("test_li_01"),
    test_li_02 = document.getElementById("test_li_02"),
    test_li_03 = document.getElementById("test_li_03"),
    test_li_04 = document.getElementById("test_li_04"),
    test_li_05 = document.getElementById("test_li_05"),
    test_li_06 = document.getElementById("test_li_06");

// 01 animation 
test_li_01.style.zIndex = 2;

// 02 animation 
test_li_02.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-02-script")
});
test_li_02.addEventListener("mouseout", () => {
    cursor.classList.remove("cursor-02-script")
});

// 03 animation 
test_li_03.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-03-script")
});
test_li_03.addEventListener("mouseout", () => {
    cursor.classList.remove("cursor-03-script")
});