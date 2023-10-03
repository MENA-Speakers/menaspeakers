<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'MENA Speakers') }}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

  <meta name="dc.publisher" content="Mena Speakers">
  <meta name="dc.type" content="website">
  <meta name="dc.format" content="text/html">
  <meta name="dc.language" content="en-US">



  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  @inertiaHead
</head>

<body class="font-poppins antialiased">
  @inertia
</body>

<!-- Scripts GETBEE -->
<script>
  window.getbeeWidgetConf = {
    tenant:"menaspeakers",
    infoBox:{
      isEnabled: true,
      text: "Start a video call with one of our experts",
      timer: 5000
    },
    cta:{
      type: "image",
      video:{
        text: "Call our team",
        videoUrl: "https://testbeestorage.blob.core.windows.net/devwidget/video.mp4",
        videoPage: {
          heading: "Shop with our team",
          descrp: "Talk to sales agent over video call",
          btnText: "Call expert",
        },
      },
      image:{
        imageUrl: "https://getbee.blob.core.windows.net/widget/menaspeakers-logo.png",
      },
    },
    showCta: true,
    position: "right",
    spacing: "16px",
  };
  (() => {
    var w = window;
    var d = document;
    var l = function () {
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://iframe.getbee.com/dist/getbee.js";
      var x = d.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    };
    if (document.readyState === "complete") {
      l();
    } else if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  })();


</script>

<script>
  (function(w,d,u){
    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
  })(window,document,'https://cdn.bitrix24.com/b25531643/crm/tag/call.tracker.js');
</script>

<script data-b24-form="auto/67/2r08ch" data-skip-moving="true">
  (function(w,d,u){
   if ( route('index') ){
     var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
     var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
   }
  })(window,document,'https://cdn.bitrix24.com/b25531643/crm/form/loader_67.js');
</script>

</html>
