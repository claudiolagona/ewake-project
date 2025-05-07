const video = document.querySelector("video");
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

const playVideo = () => {
  video.playing ? video.pause() : video.play();
};

video.addEventListener("click", playVideo);
