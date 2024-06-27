<x-main-layout>
  <div id="perspective" style="">
    <input type="hidden" id="pp_menu_layout" name="pp_menu_layout" value="leftalign" />
    <input type="hidden" id="pp_enable_right_click" name="pp_enable_right_click" value="" />
    <input type="hidden" id="pp_enable_dragging" name="pp_enable_dragging" value="" />
    <input type="hidden" id="pp_image_path" name="pp_image_path" value="images/" />
    <input type="hidden" id="pp_homepage_url" name="pp_homepage_url" value="/" />
    <input type="hidden" id="pp_fixed_menu" name="pp_fixed_menu" value="1" />
    <input type="hidden" id="tg_sidebar_sticky" name="tg_sidebar_sticky" value="1" />
    <input type="hidden" id="tg_footer_reveal" name="tg_footer_reveal" value="1" />
    <input type="hidden" id="tg_header_content" name="tg_header_content" value="content" />
    <input type="hidden" id="pp_topbar" name="pp_topbar" value="" />
    <input type="hidden" id="post_client_column" name="post_client_column" value="4" />
    <input type="hidden" id="pp_back" name="pp_back" value="Back" />
    <input type="hidden" id="tg_lightbox_thumbnails" name="tg_lightbox_thumbnails" value="thumbnail" />
    <input type="hidden" id="tg_lightbox_thumbnails_display" name="tg_lightbox_thumbnails_display" value="1" />
    <input type="hidden" id="tg_lightbox_timer" name="tg_lightbox_timer" value="7000" />


    <input type="hidden" id="tg_live_builder" name="tg_live_builder" value="0" />

    <input type="hidden" id="pp_footer_style" name="pp_footer_style" value="3" />

    <!-- Begin mobile menu -->
    <a id="close_mobile_menu" href="javascript:;"></a>

    <div class="mobile_menu_wrapper">
      <div class="mobile_menu_content">
        <div class="menu-main-menu-container">
          <x-main-menu />
        </div>
      </div>
    </div>
    <!-- End mobile menu -->
    <!-- Begin template wrapper -->
    <div id="wrapper" class="" style="background-color: #f9f9f9;">

      <div id="elementor_header" class="header_style_wrapper">
        <div data-elementor-type="wp-post" data-elementor-id="30" class="elementor elementor-30" data-elementor-settings="[]">
          <div class="elementor-inner">
            <div class="elementor-section-wrap">
              <section class="elementor-element elementor-element-5cde816 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                       data-id="5cde816"
                       data-element_type="section"
                       data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}' >
                <div class="elementor-container elementor-column-gap-no">
                  <div class="elementor-row">

                    <div class="elementor-element elementor-element-04c2420 elementor-column  elementor-top-column"
                         data-id="04c2420"
                         data-element_type="column"
                         data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}' >
                      <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                          <div
                            class="elementor-element elementor-element-1bb144f elementor-widget elementor-widget-image"
                            data-id="1bb144f"
                            data-element_type="widget"
                            data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            data-widget_type="image.default" >
                            <div class="elementor-widget-container">
                              <div class="elementor-image">
                                <a href="/">
                                  <img
                                    width="320"
                                    height="174"
                                    src="{{ asset('images/logo-color.png') }}"
                                    class="attachment-full size-full"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="elementor-element text_alignright elementor-column  elementor-top-column"
                         data-id="ea0a70c"
                         data-element_type="column"
                         data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}' >
                      <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                          <div class="elementor-element elementor-element-c26a5d5 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-dotlife-navigation-menu"
                               data-id="c26a5d5"
                               data-element_type="widget"
                               data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                               data-widget_type="dotlife-navigation-menu.default">
                            <div class="elementor-widget-container">
                              <div class="tg_navigation_wrapper menu_style2">
                                <div class="menu-main-menu-right-container">
                                  <ul id="nav_menu5" class="nav">
                                    <li class="menu-item ">
                                      <a href="/">Home</a>
                                    </li>
                                    <li class="menu-item ">
                                      <a href="#">Speaker</a>
                                    </li>
                                    <li class="menu-item">
                                      <a href="#">Gallery</a>
                                    </li>

                                    <li class="menu-item">
                                      <a href="#">Blog</a>
                                    </li>

                                    <li class="menu-item">
                                      <a href="{{ route('pages.contact') }}">Contact</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-c0aacca elementor-widget__width-auto elementor-shape-circle elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-social-icons"
                            data-id="c0aacca"
                            data-element_type="widget"
                            data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            data-widget_type="social-icons.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-social-icons-wrapper">
                                <a href="#" class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-grow elementor-repeater-item-4c7fc40" target="_blank">
                                  <span class="elementor-screen-only">Facebook</span>
                                  <i class="fa fa-facebook"></i>
                                </a>
                                <a href="#" class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-grow elementor-repeater-item-a6a46e5" target="_blank">
                                  <span class="elementor-screen-only">Twitter</span>
                                  <i class="fa fa-twitter"></i>
                                </a>
                                <a href="#" class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-animation-grow elementor-repeater-item-cc5da47" target="_blank">
                                  <span class="elementor-screen-only">Linkedin</span>
                                  <i class="fa fa-linkedin"></i>
                                </a>
                                <a href="#" class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-grow elementor-repeater-item-979e885" target="_blank">
                                  <span class="elementor-screen-only">Instagram</span>
                                  <i class="fa fa-instagram"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="elementor-element elementor-element-f3ab912 elementor-align-right elementor-hidden-desktop elementor_mobile_nav elementor-mobile-align-right elementor-widget__width-auto elementor-widget elementor-widget-button"
                            data-id="f3ab912"
                            data-element_type="widget"
                            data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            data-widget_type="button.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a href="" class="elementor-button-link elementor-button elementor-size-xl" role="button">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-icon elementor-align-icon-left">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </span>
                                        <span class="elementor-button-text"></span>
                                    </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <!-- Begin content -->
      <div id="page_content_wrapper" class="">
        <div class="inner">
          <!-- Begin main content -->
          <div class="inner_wrapper">
            <div class="sidebar_content full_width">
              <div id="lp-single-course" class="lp-single-course">
                <div id="single_course_bgimage" style="background-image: url({{ asset('images/speaker-banner.png') }});"></div>
                <div class="grid grid-cols-1 z-20 lg:grid-cols-6 gap-6 mt-6 ">
                  <div class="col-span-1 z-0 lg:col-span-2">
                    <div class="p-4 bg-white -mt-48 w-full border border-red-600">
                      <img class="object-cover h-96 w-full" src="{{$speaker->getFirstMediaUrl('avatar')}}" alt="{{ $speaker->name }}">
                    </div>
                    <div class="spacey-y-4 mt-6 grid">
                      <div class="bg-gray-100 py-3 px-4">
                        <h1 class="text-lg font-semibold uppercase">{{ $speaker->name }}</h1>
                      </div>
                      <div class="bg-gray-50 py-3 px-4">

                      </div>

                      <a href="{{ route('pages.contact') }}" class="bg-blue-900 hover:text-gray-100 text-white w-full py-3 px-4">
                        <span  class=" text-xl uppercase">Book Speaker</span>
                      </a>
                    </div>
                  </div>

                  <div class="col-span-1 lg:col-span-4">
                    <div class="bg-blue-900  py-4 px-6">
                      <h1 class="text-xl text-white font-semibold">
                        ABOUT SPEAKER
                      </h1>
                    </div>
                    <div class="py-4 px-6">
                      {!! $speaker->bio !!}
                    </div>
                  </div>
                </div>
                <div id="learn-press-course" class="course-summary">
                  {{--                <div class="course-landing-summary">--}}


                  {{--                  <div id="learn-press-course-tabs" class="course-tabs">--}}

                  {{--                    <div class="course-tab-panel-overview course-tab-panel active" id="tab-overview">--}}
                  {{--                      <div class="course-description" id="learn-press-course-description">--}}
                  {{--                        {!! $speaker->bio !!}--}}
                  {{--                      </div>--}}
                  {{--                    </div>--}}



                  {{--                  </div>--}}


                  {{--                </div>--}}

                </div>
              </div>
              <div class="comment_disable_clearer"></div>
            </div>
          </div>
          <!-- End main content -->
        </div>
        <br class="clear" />
      </div>



    </div>

    <div id="footer_wrapper">
      <div data-elementor-type="wp-post" data-elementor-id="132" class="elementor elementor-132" data-elementor-settings="[]">
        <div class="elementor-inner">
          <div class="elementor-section-wrap">
            <section
              class="elementor-element elementor-element-cb73629 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
              data-id="cb73629"
              data-element_type="section"
              data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
            >
              <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                  <div
                    class="elementor-element elementor-element-2e59880 elementor-column elementor-col-50 elementor-top-column"
                    data-id="2e59880"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-7434de0 elementor-widget elementor-widget-heading"
                          data-id="7434de0"
                          data-element_type="widget"
                          data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="heading.default"
                        >
                          <div class="elementor-widget-container">
                            <span class="elementor-heading-title elementor-size-default">Stay in the know on new free e-book</span>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-8f3dbec elementor-widget elementor-widget-heading"
                          data-id="8f3dbec"
                          data-element_type="widget"
                          data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="heading.default"
                        >
                          <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default">Sign up for our newsletter</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-af68be5 mc4wp-form-white elementor-column elementor-col-50 elementor-top-column"
                    data-id="af68be5"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-808a030 elementor-widget elementor-widget-shortcode"
                          data-id="808a030"
                          data-element_type="widget"
                          data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="shortcode.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-shortcode">
                              <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-154" method="post" data-id="154" data-name="Subscription Form">
                                <div class="mc4wp-form-fields"><input type="email" name="EMAIL" placeholder="Your email address" required="" /> <input type="submit" value="Subscribe" /></div>
                                <label style="display: none !important;">
                                  Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" />
                                </label>
                                <input type="hidden" name="_mc4wp_timestamp" value="1614677680" /><input type="hidden" name="_mc4wp_form_id" value="154" />
                                <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                <div class="mc4wp-response"></div>
                              </form>
                              <!-- / Mailchimp for WordPress Plugin -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              class="elementor-element elementor-element-795165f elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
              data-id="795165f"
              data-element_type="section"
              data-settings='{"dotlife_ext_is_background_parallax":"false"}'
            >
              <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                  <div
                    class="elementor-element elementor-element-e17c360 elementor-column elementor-col-100 elementor-top-column"
                    data-id="e17c360"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-aedb9f2 elementor-widget elementor-widget-image"
                          data-id="aedb9f2"
                          data-element_type="widget"
                          data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="image.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-image">
                              <img
                                width="320"
                                height="174"
                                src="{{ asset('/images/logo-color.png') }}"
                                class="attachment-full size-full"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <section
                          class="elementor-element elementor-element-778cf04 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section"
                          data-id="778cf04"
                          data-element_type="section"
                          data-settings='{"dotlife_ext_is_background_parallax":"false"}'
                        >
                          <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                              <div
                                class="elementor-element elementor-element-8a65e70 elementor-column  elementor-inner-column"
                                data-id="8a65e70"
                                data-element_type="column"
                                data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                              >
                                <div class="elementor-column-wrap elementor-element-populated">
                                  <div class="elementor-widget-wrap">
                                    <div
                                      class="elementor-element elementor-element-03533d2 elementor-widget elementor-widget-heading"
                                      data-id="03533d2"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <h3 class="elementor-heading-title elementor-size-default">Address</h3>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-524b8db elementor-widget elementor-widget-heading"
                                      data-id="524b8db"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="mailto:info@mena-speakers.com">info@mena-speakers.com</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-15cf568 elementor-widget elementor-widget-heading"
                                      data-id="15cf568"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="/">Burlington Tower, 18th floor, Business Bay</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-1f1a46e elementor-widget elementor-widget-heading"
                                      data-id="1f1a46e"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="/">Dubai, United Arab Emirates </a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-8805bcf elementor-widget elementor-widget-heading"
                                      data-id="8805bcf"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-4856d87 elementor-column elementor-col-25 elementor-inner-column"
                                data-id="4856d87"
                                data-element_type="column"
                                data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                              >
                                <div class="elementor-column-wrap elementor-element-populated">
                                  <div class="elementor-widget-wrap">
                                    <div
                                      class="elementor-element elementor-element-d4d1ada elementor-widget elementor-widget-heading"
                                      data-id="d4d1ada"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <h3 class="elementor-heading-title elementor-size-default">Explore</h3>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-cd7631d elementor-widget elementor-widget-heading"
                                      data-id="cd7631d"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="{{ route('index') }}">Home</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-38bfbad elementor-widget elementor-widget-heading"
                                      data-id="38bfbad"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="#">Speakers</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-d71a48e elementor-widget elementor-widget-heading"
                                      data-id="d71a48e"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="#">FAQs</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-45a459e elementor-widget elementor-widget-heading"
                                      data-id="45a459e"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="#">Refund Policy</a></span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-991f535 elementor-widget elementor-widget-heading"
                                      data-id="991f535"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default"><a href="{{ route('pages.terms') }}">Terms of Services</a></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-733da97 elementor-column elementor-col-25 elementor-inner-column"
                                data-id="733da97"
                                data-element_type="column"
                                data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                              >
                                <div class="elementor-column-wrap elementor-element-populated">
                                  <div class="elementor-widget-wrap">
                                    <div
                                      class="elementor-element elementor-element-7d32d00 elementor-widget elementor-widget-heading"
                                      data-id="7d32d00"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <h3 class="elementor-heading-title elementor-size-default">Get Connect</h3>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-ac05e34 elementor-widget elementor-widget-heading"
                                      data-id="ac05e34"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <span class="elementor-heading-title elementor-size-default">
                                            Are we friends on social media, yet? Use the buttons below to connect, then join my list to your right.
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-element elementor-element-6341d81 elementor-shape-circle elementor-widget elementor-widget-social-icons"
                                      data-id="6341d81"
                                      data-element_type="widget"
                                      data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="social-icons.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <div class="elementor-social-icons-wrapper">
                                          <a href="https://www.facebook.com/menaspeakers" class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-38753b6" target="_blank">
                                            <span class="elementor-screen-only">Facebook</span>
                                            <i class="fa fa-facebook"></i>
                                          </a>
                                          <a href="https://www.twitter.com/menaspeakers" class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-61ca314" target="_blank">
                                            <span class="elementor-screen-only">Twitter</span>
                                            <i class="fa fa-twitter"></i>
                                          </a>
                                          <a href="https://www.linkedin.com/company/10342646" class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-3568559" target="_blank">
                                            <span class="elementor-screen-only">Linkedin</span>
                                            <i class="fa fa-linkedin"></i>
                                          </a>
                                          <a href="https://www.instagram.com/menaspeakers" class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-d9a0cf3" target="_blank">
                                            <span class="elementor-screen-only">Instagram</span>
                                            <i class="fa fa-instagram"></i>
                                          </a>
                                          <a href="https://www.youtube.com/channel/UC2JUu4HX3V_ISoPoA4pnfLA" class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-d9a0cf3" target="_blank">
                                            <span class="elementor-screen-only">Youtube</span>
                                            <i class="fa fa-youtube"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-element elementor-element-5db873e elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
              data-id="5db873e"
              data-element_type="section"
              data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
            >
              <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                  <div
                    class="elementor-element elementor-element-497a171 elementor-column elementor-col-100 elementor-top-column"
                    data-id="497a171"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-816c088 elementor-widget__width-inherit elementor-widget elementor-widget-heading"
                          data-id="816c088"
                          data-element_type="widget"
                          data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="heading.default"
                        >
                          <div class="elementor-widget-container">
                            <span class="elementor-heading-title elementor-size-default">© Copyright MENA SPEAKERS All rights reserved.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <a id="toTop" href="javascript:;"><i class="fa fa-angle-up"></i></a>

  </div>
</x-main-layout>
