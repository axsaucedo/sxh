<div id="player"></div>
<script>
      var tag = document.createElement("script");
      tag.src = "http://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubePlayerAPIReady() {
        player = new YT.Player("player", {
          playerVars: { "autoplay": 1, "controls": 1,"autohide":1,"wmode":"opaque" },
          videoId: "JGR03TzZONA",
          events: {
            "onReady": onPlayerReady}
        });
      }

      function onPlayerReady(event) {
        event.target.mute();
        player.mute();
      }
</script>