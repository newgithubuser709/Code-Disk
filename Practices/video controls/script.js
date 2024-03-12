var video = document.getElementById("video"),
    TimeLine_bg = document.getElementById("TimeLine_bg"),
    TimeLine_input = document.getElementById("TimeLine_input"),
    TimeLine = document.getElementById("TimeLine"),
    PlayPause = document.getElementById("PlayPause"),
    volume_container = document.getElementById("volume_container"),
    video_volume = document.getElementById("video_volume"),
    back_skip = document.getElementById("back_skip"),
    forward_skip = document.getElementById("forward_skip");

PlayPause.addEventListener("click", playPauseToggle);

function playPauseToggle() {

    var play_i = document.getElementById("play_i"),
        pause_i = document.getElementById("pause_i");

    if (video.paused) {
        video.play();
        play_i.style.display = "none";
        pause_i.style.display = "block";

    } else {
        video.pause();
        play_i.style.display = "block";
        pause_i.style.display = "none";
    }
};

TimeLine_input.addEventListener("click", (e) => {

    const scrubTime = (e.offsetX / TimeLine_input.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

});

TimeLine_input.addEventListener("input", () => {

    const scrubTime_input = (TimeLine_input.value / 100) * video.duration;
    video.currentTime = scrubTime_input;

});

video.addEventListener("timeupdate", () => {

    const progressPercentage = (video.currentTime / video.duration) * 100;
    TimeLine_input.value = `${progressPercentage}`;

    TimeLine.style.width = `${progressPercentage}%`;

    if (video.currentTime == video.duration) {
        play_i.style.display = "block";
        pause_i.style.display = "none";
    }
});

video_volume.addEventListener("input", () => {

    video.volume = video_volume.value;
});

back_skip.addEventListener("click", () => {
    video.currentTime -= 20
})

forward_skip.addEventListener("click", () => {
    video.currentTime += 20
});

// document.querySelector('video').playbackRate = 3.0;