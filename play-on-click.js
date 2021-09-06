AFRAME.registerComponent("play-on-click", {
  schema: {
    isPlaying: { type: "boolean", default: false },
  },
  init() {
    this.videoElt = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);
    this.play();
  },
  play() {
    window.addEventListener("click", this.onClick);
  },
  onClick(evt) {
    if (!this.videoElt) {
      return;
    }
    const { isPlaying } = this.el.getAttribute("play-on-click");
    this.el.object3D.visible = true;

    if (!isPlaying) {
      this.el.setAttribute("play-on-click", { isPlaying: true });
      this.videoElt.play();
    } else {
      this.el.setAttribute("play-on-click", { isPlaying: false });
      this.videoElt.pause();
    }
  },
});
