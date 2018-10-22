var conf = {
  key: '29ba4a30-8b5e-4336-a7dd-c94ff3b25f30',
  source: {
    dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
    hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
    poster: 'https://bitdash-a.akamaihd.net/content/art-of-motion_drm/art-of-motion_poster.jpg'
  },
  cast: {
    enable: true
  }
};

var analyticsConfig = {
  key: '45adcf9b-8f7c-4e28-91c5-50ba3d442cd4',
  videoId: 'variable-playback-speed'
};

var analytics = bitmovin.analytics(analyticsConfig);
var player = bitmovin.player('player');

analytics.register(player);
player.setup(conf).then(function(){
  bitmovin.playerui.UIManager.Factory.buildDefaultUI(player, {playbackSpeedSelectionEnabled: true})
});
