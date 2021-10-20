export class Audio extends EventTarget {
  static fileCatalog = [
    "bongo-1",
    "conga-1",
    "shaker-1",
    "shaker-2",
    "snare-1",
    "snare-2",
    "snare-3",
    "snare-4",
    "snare-5",
  ];

  constructor() {
    super();
    this.globalVolume = 0.5;
    this.refs = new Map();
    this.playable = new Map();
  }

  init = () => {
    Audio.fileCatalog.forEach(this.loadSoundFile);
  };

  checkAllPlayable = () => {
    const allPlayable = [...this.playable].every(Boolean);
    if (allPlayable) {
      const readyEvent = new Event("ready");
      this.dispatchEvent(readyEvent);
    }
  };

  loadSoundFile = (fileName) => {
    const el = document.createElement("audio");
    el.volume = this.globalVolume;
    el.loop = false;
    el.controls = false;
    el.preload = "auto";
    el.src = `/assets/${fileName}.wav`;
    el.addEventListener("canplaythrough", () => {
      this.playable.set(fileName, true);
      this.checkAllPlayable();
    });

    this.playable.set(fileName, false);
    this.refs.set(fileName, el);
    document.body.appendChild(el);
  };

  play = (fileName) => {
    /** @type {HTMLAudioElement} */
    const el = this.refs.get(fileName);
    if (!el.paused) {
      el.currentTime = 0;
    } else {
      el.play();
    }
  };

  setVolume = (value) => {
    this.globalVolume = value / 100;
    this.refs.forEach((el) => (el.volume = this.globalVolume));
  };
}
