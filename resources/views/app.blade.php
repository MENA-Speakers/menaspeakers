<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'MENA Speakers') }}</title>
  <link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/x-icon">

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
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>

<body class="font-playfair antialiased">
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

<script>
  // Function to check if a cookie exists
  function getCookie(name) {
    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    return match ? match[1] : undefined;
  }

  // Function to set a cookie
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  // Check if the cookie exists
  if (!getCookie('subscription_cookie')) {
    // Your original script here
    (function(w, d, u){
      if (route('index')){
        var s = d.createElement('script');
        s.async = true;
        s.src = u + '?' + (Date.now() / 180000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      }
    })(window, document, 'https://cdn.bitrix24.com/b25531643/crm/form/loader_67.js');

    // Set the cookie to mark that the script has run
    setCookie('subscription_cookie', 'true', 365);  // Set to expire in 365 days (adjust as needed)
  }
</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(95695151, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/95695151" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</html>
