<!DOCTYPE html>
<html lang="en-US" data-menu="leftalign">

<head>

  <meta charset="utf-8" />

  <meta name="robots" content="noindex,nofollow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="format-detection" content="telephone=no" />

  {!! SEO::generate() !!}


  <link rel="stylesheet" href="{{ asset('js/plugins/modal-for-elementor/css/bootstrap.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/modal-for-elementor/css/popup.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/reset.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/wordpress.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/style.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/modulobox.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/leftalignmenu.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/themify-icons.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/tooltipster.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/demo.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/loftloader/assets/css/loftloader.min.css?ver=2020072001') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.7.0 ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/elementor/assets/lib/animations/animations.min.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/elementor/assets/css/frontend.min.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/swiper.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/animatedheadline.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/flickity.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/justifiedGallery.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/owl.theme.default.min.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/switchery.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/dotlife-elementor.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/dotlife-elementor-responsive.css ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css?ver=4.7.0 ') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/responsive.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('js/plugins/dotlife-elementor/assets/css/typedjs.min.css') }}" type="text/css" media="all" />
  <link rel="stylesheet" href="{{ asset('css/custom.css') }}" type="text/css" media="all" />
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  <link rel="icon" href="upload/TG-Thumb.png" sizes="32x32" />
  <link rel="icon" href="upload/TG-Thumb.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="upload/TG-Thumb.png" />
  <meta name="msapplication-TileImage" content="upload/TG-Thumb.png" />


</head>


<body data-rsssl="1"  class="home page-template-default page page-id-1737 woocommerce-no-js tg_menu_transparent tg_lightbox_black leftalign tg_footer_reveal loftloader-lite-enabled elementor-default elementor-kit-3076 elementor-page elementor-page-1737" >

{{ $slot }}


<script type="text/javascript" src="{{ asset('js/jquery.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/jquery-migrate.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/vendor/plugins.all.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/underscore.min.js')}}"></script>
<script type="text/javascript">
  /* <![CDATA[ */
  var userSettings = { url: "//dotlife//demo//", uid: "0", time: "1614677679", secure: "1" };
  /* ]]> */
</script>
<script type="text/javascript" src="{{ asset('js/plugins/utils.min.js')}}"></script>
<script type="text/javascript">
  /* <![CDATA[ */
  var lpGlobalSettings = {
    url: null,
    siteurl: "/",
    ajax: "#",
    theme: "dotlife",
    localize: { button_ok: "OK", button_cancel: "Cancel", button_yes: "Yes", button_no: "No" },
  };
  /* ]]> */
</script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/global.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/utils.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/frontend/learnpress.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/frontend/course.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/learnpress/assets/js/frontend/become-teacher.js')}}"></script>

<script>
  (function () {
    function maybePrefixUrlField() {
      if (this.value.trim() !== "" && this.value.indexOf("http") !== 0) {
        this.value = "http://" + this.value;
      }
    }

    var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
    if (urlFields) {
      for (var j = 0; j < urlFields.length; j++) {
        urlFields[j].addEventListener("blur", maybePrefixUrlField);
      }
    }
  })();
</script>


<script type="text/javascript" src="{{ asset('js/plugins/imagesloaded.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/masonry.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.lazy.js')}}"></script>
<script type="text/javascript">
  jQuery(function ($) {
    jQuery("img.lazy").each(function () {
      var currentImg = jQuery(this);

      jQuery(this).Lazy({
        onFinishedAll: function () {
          currentImg.parent("div.post_img_hover").removeClass("lazy");
          currentImg.parent(".tg_gallery_lightbox").parent("div.gallery_grid_item").removeClass("lazy");
          currentImg.parent("div.gallery_grid_item").removeClass("lazy");
        },
      });
    });
  });
</script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/modulobox.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.parallax-scroll.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.smoove.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/parallax.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.blast.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.visible.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jarallax.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/modal-for-elementor/js/jquery.cookie.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/modal-for-elementor/js/bootstrap.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/modal-for-elementor/js/popup.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/ui/core.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/ui/effect.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/waypoints.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/tilt.jquery.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/jquery.stellar.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/core/custom_plugins.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/core/custom.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/jquery.sticky-kit.min.js')}}"></script>
<script type="text/javascript">
  jQuery(function ($) {
    jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent({ offset_top: 100 });

    if (jQuery(window).width() < 768 || is_touch_device()) {
      jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
    }
  });
</script>
<script type="text/javascript" src="{{ asset('js/plugins/jquery.tooltipster.min.js')}}"></script>
<script type="text/javascript">
  jQuery(function ($) {
    jQuery(".demotip").tooltipster({
      position: "left",
    });
  });
</script>
<script type="text/javascript" src="{{ asset('js/plugins/loftloader/assets/js/loftloader.min.js?ver=2020072001')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/webfont.js')}}"></script>
<script type="text/javascript">
  /* <![CDATA[ */
  var tgAjax = { ajaxurl: "#", ajax_nonce: "941535503d" };
  /* ]]> */
</script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/dotlife-elementor.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/anime.min.js?ver=5.4.4')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/tweenmax.min.js?ver=5.4.4')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/lib/swiper/swiper.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/dotlife-elementor/assets/js/typed.min.js')}}"></script>
<script type="text/javascript">
  jQuery(function ($) {
    jQuery(".type-wrap").show();
    jQuery("#typed").typed({
      stringsElement: jQuery("#typed-strings"),
      typeSpeed: 65,
      backDelay: 2500,
      loop: true,
      loopCount: Infinity,
      contentType: "html", // or text
      loopCount: true,
    });
  });
</script>
<script type="text/javascript" src="{{ asset('js/plugins/jquery.cookie.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/core/demo.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/js/frontend-modules.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/ui/position.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/lib/dialog/dialog.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/lib/waypoints/waypoints.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/lib/share-link/share-link.min.js')}}"></script>
<script type="text/javascript">
  var elementorFrontendConfig = {
    environmentMode: { edit: false, wpPreview: false },
    i18n: { shareOnFacebook: "Share on Facebook", shareOnTwitter: "Share on Twitter", pinIt: "Pin it", downloadImage: "Download image" },
    is_rtl: false,
    breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
    version: "2.9.14",
    urls: { assets: "plugins//elementor//assets//" },
    settings: {
      page: [],
      general: {
        elementor_global_image_lightbox: "yes",
        elementor_lightbox_enable_counter: "yes",
        elementor_lightbox_enable_fullscreen: "yes",
        elementor_lightbox_enable_zoom: "yes",
        elementor_lightbox_enable_share: "yes",
        elementor_lightbox_title_src: "title",
        elementor_lightbox_description_src: "description",
      },
      editorPreferences: [],
    },
    post: { id: 1737, title: "DotLife%20%7C%20Online%20Courses%20for%20Life%20Coach%20%E2%80%93%20Just%20another%20WordPress%20site", excerpt: "", featuredImage: false },
  };
</script>
<script type="text/javascript" src="{{ asset('js/plugins/elementor/assets/js/frontend.min.js')}}"></script>
</body>
</html>
