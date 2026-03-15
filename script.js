(() => {
  // Twitch embed requires parent=yourdomain.
  // We auto-detect the current hostname so it works on:
  // - ivyrosewolf.org
  // - www.ivyrosewolf.org
  // - local testing (localhost)
  const host = window.location.hostname || "ivyrosewolf.org";
  const parent = encodeURIComponent(host);

  const channel = "ivy_rose_wolf";
  const src = `https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`;

  const iframe = document.getElementById("twitchEmbed");
  if (iframe) {
    iframe.src = src;
  }
})();