const mockup = document.querySelector("#videoMockup");
const video = document.querySelector("#videoDemo");

function showVideo() {
    video.classList.remove("hidden");
    mockup.classList.add("hidden");
}