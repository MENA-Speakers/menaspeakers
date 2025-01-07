<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'MENA Speakers') }}</title>
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/x-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400&family=Poppins:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">

    <meta name="dc.publisher" content="Mena Speakers">
    <meta name="dc.type" content="website">
    <meta name="dc.format" content="text/html">
    <meta name="dc.language" content="en-US">

    {{--  SEO Generated --}}
    {!! SEO::generate() !!}

    {{--  end seo generated --}}

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-playfair antialiased">
    @inertia
</body>

@unless (request()->is('crm*'))
    <!-- Scripts GETBEE -->
    {{-- <script>
  window.getbeeWidgetConf = {
    tenant: "menaspeakers",
    cta: {
      type: "video",
      video: {
        text: "Call our team",
        videoUrl:
          "https://testbeestorage.blob.core.windows.net/devwidget/mena.mp4",
        videoPage: {
          heading: "Call our team",
          descrp: "Talk to sales agent over video call",
          btnText: "Call an expert",
        }
      }
    },
    showCta: true,
    position: "right",
    spacing: "16px",
    bottomSpacing: "16px",
  };
  (() => {
    var w = window;
    var d = document;
    var l = function () {
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://iframe.getbee.com/dist/getbee.js"
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
</script> --}}
@endunless

{{-- Clarity script  --}}
<script type="text/javascript">
    (function(c, l, a, r, i, t, y) {
        c[a] = c[a] || function() {
            (c[a].q = c[a].q || []).push(arguments)
        };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "oyyd41cqe3");
</script>

<script>
    (function(w, d, u) {
        var s = d.createElement('script');
        s.async = true;
        s.src = u + '?' + (Date.now() / 60000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
    })(window, document, 'https://cdn.bitrix24.com/b25531643/crm/tag/call.tracker.js');
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-458374216"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-458374216');
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
        (function(w, d, u) {
            if (route('index')) {
                var s = d.createElement('script');
                s.async = true;
                s.src = u + '?' + (Date.now() / 180000 | 0);
                var h = d.getElementsByTagName('script')[0];
                h.parentNode.insertBefore(s, h);
            }
        })(window, document, 'https://cdn.bitrix24.com/b25531643/crm/form/loader_67.js');

        // Set the cookie to mark that the script has run
        setCookie('subscription_cookie', 'true', 365); // Set to expire in 365 days (adjust as needed)
    }
</script>


</html>
