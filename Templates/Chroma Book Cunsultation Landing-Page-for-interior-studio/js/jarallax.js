jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.4,
})

// or function way to diasable jaralax & video on devices 
// jarallax(document.querySelectorAll('.jarallax'), {
//     disableParallax: function() {
//         return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
//     },
//     disableVideo: function() {
//         return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
//     }
// });