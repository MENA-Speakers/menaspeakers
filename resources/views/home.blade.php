@extends('layouts.index')

@section('content')
  <!-- Begin mobile menu -->
  <a id="close_mobile_menu" href="javascript:;"></a>

  <div class="mobile_menu_wrapper">
    <div class="mobile_menu_content">
      <div class="menu-main-menu-container">
        <ul id="mobile_main_menu" class="mobile_main_nav">
          <li class="menu-item" >
            <a href="/" aria-current="page">Home</a>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <!-- End mobile menu -->
  <!-- Begin template wrapper -->
  <div id="wrapper" class="hasbg transparent">
    <div id="elementor_header" class="header_style_wrapper">
      <div data-elementor-type="wp-post" data-elementor-id="110" class="elementor elementor-110" data-elementor-settings="[]">
        <div class="elementor-inner">
          <div class="elementor-section-wrap">
            <section
              class="elementor-element elementor-element-4a4d4ab elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
              data-id="4a4d4ab"
              data-element_type="section"
              data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
            >
              <div class="elementor-container elementor-column-gap-no">
                <div class="elementor-row">

                  <div
                    class="elementor-element elementor-element-4ff83c3 elementor-column elementor-col-33 elementor-top-column"
                    data-id="4ff83c3"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-f8cf31f elementor-widget elementor-widget-image"
                          data-id="f8cf31f"
                          data-element_type="widget"
                          data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="image.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-image">
                              <a href="index.html">
                                <img
                                  width="320"
                                  height="174"
                                  src="{{asset('images/Mena-logo-white.png')}}"
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
                  <div
                    class="elementor-element elementor-element-f2366a8 text_alignright elementor-column elementor-col-33 elementor-top-column"
                    data-id="f2366a8"
                    data-element_type="column"
                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                  >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div
                          class="elementor-element elementor-element-4ad2108 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-dotlife-navigation-menu"
                          data-id="4ad2108"
                          data-element_type="widget"
                          data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                          data-widget_type="dotlife-navigation-menu.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="tg_navigation_wrapper menu_style2">
                              <div class="menu-main-menu-right-container">
                                <ul id="nav_menu5" class="nav">
                                  <li class="menu-item">
                                    <a href="/">Home</a>
                                  </li>
                                  <li class="menu-item ">
                                    <a href="#">Gallery</a>
                                  </li>
                                  <li class="menu-item">
                                    <a href="{{ route('blogs.index') }}">Blog</a>
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
                          class="elementor-element elementor-element-f4244c9 elementor-widget__width-auto elementor-shape-circle elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-social-icons"
                          data-id="f4244c9"
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
                          class="elementor-element elementor-element-0332797 elementor-align-right elementor-hidden-desktop elementor_mobile_nav elementor-mobile-align-right elementor-widget__width-auto elementor-widget elementor-widget-button"
                          data-id="0332797"
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

    <div id="page_caption" class="   ">
      <div class="page_title_wrapper">
        <div class="standard_wrapper">
          <div class="page_title_inner">
            <div class="page_title_content title_align_left">
              <h1>Home </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Begin content -->
    <div id="page_content_wrapper" class="">
      <div class="inner">
        <!-- Begin main content -->
        <div id="page_content_wrapper" class="">
          <div class="inner">
            <!-- Begin main content -->
            <div class="inner_wrapper">
              <div class="sidebar_content full_width">
                <div data-elementor-type="wp-post" data-elementor-id="1737" class="elementor elementor-1737" data-elementor-settings="[]">
                  <div class="elementor-inner">
                    <div class="elementor-section-wrap">
                      <section
                        class="elementor-element elementor-element-e803de7 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-section elementor-top-section"
                        data-id="e803de7"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic","shape_divider_bottom":"tilt","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-background-overlay"></div>
                        <div class="elementor-shape elementor-shape-bottom" data-negative="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 100" preserveaspectratio="none">
                            <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                          </svg>
                        </div>
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-abeda1d elementor-column elementor-col-50 elementor-top-column"
                              data-id="abeda1d"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-8ae9719 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="8ae9719"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <span class="elementor-heading-title elementor-size-default"></span>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-dcfda5f animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="dcfda5f"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-heading-title elementor-size-default">
                                        Bringing You a <b>positive</b> and <b>awakening</b> <b>perspective</b> on your <br />
                                        <div class="type-wrap" style="display: none;">
                                          <div id="typed-strings">
                                            <p>potentials</p>
                                            <p>goals</p>
                                            <p>future</p>
                                          </div>
                                          <span id="typed" style="white-space: pre;"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-93597de animated-fast elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-button"
                                    data-id="93597de"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a
                                          href="{{ route('speakers.index') }}"
                                          class="elementor-button-link elementor-button elementor-size-sm elementor-animation-shrink"
                                          role="button"
                                        >
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">Book Speaker</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-6c09993 animated-fast elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-button"
                                    data-id="6c09993"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":500,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-48de143 elementor-hidden-phone elementor-column elementor-col-50 elementor-top-column"
                              data-id="48de143"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap">
                                <div class="elementor-widget-wrap"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        class="elementor-element elementor-element-9f5af76 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="9f5af76"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-69dbaf0 elementor-column elementor-col-100 elementor-top-column"
                              data-id="69dbaf0"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-bb56d09 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="bb56d09"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <span class="elementor-heading-title elementor-size-default"></span>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-4592f52 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="4592f52"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <h2 class="elementor-heading-title elementor-size-default">Find a speaker for your event in 5 minutes or less.</h2>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-283e65a animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="283e65a"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                                                                <span class="elementor-heading-title elementor-size-default">
                                                                                    We are the leading speaker and MC Bureau in the Middle East. With a portfolio of hundreds of international and MENA based speakers, you will find exactly what you're looking for. The power is in your hands. Simply book professionally trained speakers anytime for just about anything.<br />

                                                                                </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        class="elementor-element elementor-element-22163b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="22163b7"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-no">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-4d3bd5b animated-fast elementor-invisible elementor-column elementor-col-25 elementor-top-column"
                              data-id="4d3bd5b"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-f78c453 elementor-widget elementor-widget-image"
                                    data-id="f78c453"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="{{ route('speakers.index') }}">
                                          <img
                                            width="300"
                                            height="300"
                                            src="{{ asset('images/1555847850_091047_preview.jpeg-610x610.jpg') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-389d250 elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="389d250"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="{{ route('speakers.index') }}" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">Motivational Speakers</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-79277b6 animated-fast elementor-invisible elementor-column elementor-col-25 elementor-top-column"
                              data-id="79277b6"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-d2506f2 elementor-widget elementor-widget-image"
                                    data-id="d2506f2"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="{{ route('speakers.index') }}">
                                          <img
                                            width="300"
                                            height="300"
                                            src="{{ asset('images/Saana-Al-Gurg-8-610x610.jpg') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-d8b95ce elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="d8b95ce"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="{{ route('speakers.index') }}" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">MC & Presenters</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-b046a32 animated-fast elementor-invisible elementor-column elementor-col-25 elementor-top-column"
                              data-id="b046a32"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-8bb27fc elementor-widget elementor-widget-image"
                                    data-id="8bb27fc"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="{{ route('speakers.index') }}">
                                          <img
                                            width="300"
                                            height="300"
                                            src="{{ asset('images/WhatsApp-Image-2020-04-16-at-9.07.20-AM.jpeg') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-839a977 elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="839a977"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="{{ route('speakers.index') }}" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">Expert Speakers</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-6a8b7cc animated-fast elementor-invisible elementor-column elementor-col-25 elementor-top-column"
                              data-id="6a8b7cc"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":600,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-4c18ff4 elementor-widget elementor-widget-image"
                                    data-id="4c18ff4"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="{{ route('speakers.index') }}">
                                          <img
                                            width="300"
                                            height="300"
                                            src="{{ asset('images/WhatsApp-Image-2020-04-16-at-9.11.15-AM-e1618417124126.jpeg') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-1eb3ca7 elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="1eb3ca7"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="{{ route('speakers.index') }}" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">Inspirational Speakers</span>
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


                      <section
                        class="elementor-element elementor-element-9f5af76 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="9f5af76"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-69dbaf0 elementor-column elementor-col-100 elementor-top-column"
                              data-id="69dbaf0"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-bb56d09 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="bb56d09"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <span class="elementor-heading-title elementor-size-default"></span>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-4592f52 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="4592f52"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <h2 class="elementor-heading-title elementor-size-default">Services</h2>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-283e65a animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="283e65a"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        class="elementor-element elementor-element-22163b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="22163b7"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-no">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-4d3bd5b animated-fast elementor-invisible elementor-column elementor-col-50 elementor-top-column"
                              data-id="4d3bd5b"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-f78c453 elementor-widget elementor-widget-image"
                                    data-id="f78c453"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="#">
                                          <img
                                            width="550"
                                            height="300"
                                            src="{{ asset('images/Untitled-13-01.png') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-389d250 elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="389d250"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">PR AND MEDIA STRATEGY</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-79277b6 animated-fast elementor-invisible elementor-column elementor-col-50 elementor-top-column"
                              data-id="79277b6"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-d2506f2 elementor-widget elementor-widget-image"
                                    data-id="d2506f2"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_image_is_animation":"false","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="image.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-image">
                                        <a href="#">
                                          <img
                                            width="550"
                                            height="300"
                                            src="{{ asset('images/Untitled-13-02.png') }}"
                                            class="elementor-animation-float attachment-shop_catalog size-shop_catalog"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-d8b95ce elementor-align-center elementor-widget elementor-widget-button"
                                    data-id="d8b95ce"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">MANAGEMENT CONSULTANCY AND ADVISORY</span>
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

                      {{--JOIN COMMUNITY                                  --}}
                      <section
                        class="elementor-element elementor-element-221f892 elementor-section-stretched elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle elementor-section elementor-top-section"
                        data-id="221f892"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-51d1b9b elementor-column elementor-col-50 elementor-top-column"
                              data-id="51d1b9b"
                              data-element_type="column"
                              data-settings='{"background_background":"classic","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-32c9888 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="32c9888"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <span class="elementor-heading-title elementor-size-default"> </span>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-d4366d6 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="d4366d6"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <h2 class="elementor-heading-title elementor-size-default">Join The Network</h2>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-a80f5e9 animated-fast elementor-invisible elementor-widget elementor-widget-text-editor"
                                    data-id="a80f5e9"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="text-editor.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-text-editor elementor-clearfix">
                                        <p>
                                          We’re a dedicated team of intellectuals giving you the very best with a focus on empowering & educating.Delivering exclusive, educative & engaging content to you.                                                                         </p>
                                        <p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-23eeb2b animated-fast elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-button"
                                    data-id="23eeb2b"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":600,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-button-wrapper">
                                        <a href="{{ route('faqs.index') }}" class="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow" role="button">
                                                                                        <span class="elementor-button-content-wrapper">
                                                                                            <span class="elementor-button-text">Become a Speaker</span>
                                                                                        </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-a1efbe5 elementor-column elementor-col-50 elementor-top-column"
                              data-id="a1efbe5"
                              data-element_type="column"
                              data-settings='{"background_background":"classic","dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-9149222 elementor-widget elementor-widget-spacer"
                                    data-id="9149222"
                                    data-element_type="widget"
                                    data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="spacer.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="elementor-spacer">
                                        <div class="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>


                      {{--FEATURED SPEAKERS                                  --}}
                      <section
                        class="elementor-element elementor-element-8dcd403 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="8dcd403"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-fa84257 elementor-column elementor-col-100 elementor-top-column"
                              data-id="fa84257"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-575e084 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="575e084"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      {{--                                                  <span class="elementor-heading-title elementor-size-default">Online Learning</span>--}}
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-164a037 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="164a037"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <h2 class="elementor-heading-title elementor-size-default">Featured Speakers</h2>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-a8052bd animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="a8052bd"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                                                                <span class="elementor-heading-title elementor-size-default">
                                                                                    We work fast, we work diligently, and we produce results.
                                                                                </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        class="elementor-element elementor-element-0c2a8e1 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="0c2a8e1"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-f174d8a elementor-column elementor-col-100 elementor-top-column"
                              data-id="f174d8a"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-f1269a1 animated-fast elementor-invisible elementor-widget elementor-widget-dotlife-course-grid"
                                    data-id="f1269a1"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeIn","_animation_delay":600,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="dotlife-course-grid.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="course_grid_container">
                                        <div class="portfolio_classic_content_wrapper portfolio_classic layout_tg_three_cols" data-cols="3">

                                          <div class="portfolio_classic_grid_wrapper tg_three_cols portfolio-1 tile scale-anm">
                                            <div class="card__img" style="background-image: url(upload/smiling-people-with-craft-beer-PU5U9MA-700x466.jpg);"></div>



                                            <a href="market-and-digital-technology.html" class="card_link">
                                              <div class="card__img--hover" style="background-image: url(upload/smiling-people-with-craft-beer-PU5U9MA-700x466.jpg);"></div>
                                            </a>

                                            <div class="card__info">
                                              <span class="card__date">April 16, 2019</span>

                                              <h3 class="card__title"><a href="market-and-digital-technology.html">Diversification of Digital Marketing Strategies</a></h3>
                                              <div class="card__excerpt"><p>Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this...</p></div>

                                            </div>
                                          </div>
                                          <div class="portfolio_classic_grid_wrapper tg_three_cols portfolio-2 tile scale-anm">
                                            <div class="card__img" style="background-image: url(upload/woman-working-on-a-laptop-J5YMA9W-700x466.jpg);"></div>

                                            <a href="market-and-digital-technology.html" class="card_link">
                                              <div class="card__img--hover" style="background-image: url(upload/woman-working-on-a-laptop-J5YMA9W-700x466.jpg);"></div>
                                            </a>

                                            <div class="card__info">
                                              <span class="card__date">April 22, 2019</span>

                                              <h3 class="card__title"><a href="market-and-digital-technology.html">How to Success through Market Segmentation</a></h3>
                                              <div class="card__excerpt"><p>Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this...</p></div>

                                            </div>
                                          </div>
                                          <div class="portfolio_classic_grid_wrapper tg_three_cols last portfolio-3 tile scale-anm">
                                            <div class="card__img" style="background-image: url(upload/business-workstation-PRB5Z2M-700x466.jpg);"></div>

                                            <a href="market-and-digital-technology.html" class="card_link">
                                              <div class="card__img--hover" style="background-image: url(upload/business-workstation-PRB5Z2M-700x466.jpg);"></div>
                                            </a>

                                            <div class="card__info">
                                              <span class="card__date">April 18, 2019</span>

                                              <h3 class="card__title"><a href="market-and-digital-technology.html">Digital Skills: Using Information to Build Business</a></h3>
                                              <div class="card__excerpt"><p>Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this...</p></div>


                                            </div>
                                          </div>
                                          <br class="clear" />
                                        </div>
                                      </div>
                                      <br class="clear" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>




                      <section
                        class="elementor-element elementor-element-c6d8758 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="c6d8758"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic","dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-31c43a1 elementor-column elementor-col-100 elementor-top-column"
                              data-id="31c43a1"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-2d471bb animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="2d471bb"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":0,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <span class="elementor-heading-title elementor-size-default"></span>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-703f52d animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="703f52d"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <h2 class="elementor-heading-title elementor-size-default">Latest From The Blog</h2>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-62b96c7 animated-fast elementor-invisible elementor-widget elementor-widget-heading"
                                    data-id="62b96c7"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                                                                <span class="elementor-heading-title elementor-size-default">
                                                                                    the ultimate planning solution for<br />
                                                                                    busy women who want to reach their personal goals
                                                                                </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        class="elementor-element elementor-element-173d976 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="173d976"
                        data-element_type="section"
                        data-settings='{"dotlife_ext_is_background_parallax":"false"}'
                      >
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-row">
                            <div
                              class="elementor-element elementor-element-9a10849 elementor-column elementor-col-100 elementor-top-column"
                              data-id="9a10849"
                              data-element_type="column"
                              data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                            >
                              <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                  <div
                                    class="elementor-element elementor-element-4026079 animated-fast elementor-invisible elementor-widget elementor-widget-dotlife-blog-posts"
                                    data-id="4026079"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeIn","_animation_delay":600,"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                                    data-widget_type="dotlife-blog-posts.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="blog_post_content_wrapper layout_grid">
                                        <!-- Begin each blog post -->
                                        <div
                                          class="blog-posts-grid post-203 post type-post status-publish format-video has-post-thumbnail hentry category-career category-family category-life tag-direction tag-vision-goal-setting post_format-post-format-video"
                                        >
                                          <div class="post_wrapper">
                                            <div class="post_img static">
                                              <div class="post_img_hover">
                                                <img src="upload/man-cleaning-glasses-PKAQUKX-960x550.jpg" class="" alt="" />
                                                <div class="post_type_icon"><i class="fa fa-play"></i></div>
                                                <a href="#"></a>
                                              </div>
                                            </div>

                                            <div class="post_content_wrapper text_left">
                                              <div class="post_header">
                                                <div class="post_detail single_post">
                                                  <span class="ti-folder ti_icon"></span>
                                                  <span class="post_info_cat">
                                                                                                            <a href="#">Career</a>
                                                                                                            &nbsp;&middot;&nbsp; <a href="#">Family</a> &nbsp;&middot;&nbsp; <a href="#">Life</a>
                                                                                                        </span>
                                                </div>
                                                <div class="post_header_title">
                                                  <h5>
                                                    <a href="#" title="10 Things Successful Mompreneurs Do Different">
                                                      10 Things Successful Mompreneurs Do Different
                                                    </a>
                                                  </h5>
                                                </div>
                                              </div>

                                              <div class="post_header_wrapper"></div>
                                            </div>
                                          </div>
                                        </div>

                                        <!-- End each blog post --><!-- Begin each blog post -->
                                        <div
                                          class="blog-posts-grid post-200 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-entrepreneur category-life tag-direction tag-vision-goal-setting"
                                        >
                                          <div class="post_wrapper">
                                            <div class="post_img static">
                                              <div class="post_img_hover">
                                                <img src="upload/teamwork-together-professional-occupation-concept-PL9Q9XJ-960x550.jpg" class="" alt="" />
                                                <a href="#"></a>
                                              </div>
                                            </div>

                                            <div class="post_content_wrapper text_left">
                                              <div class="post_header">
                                                <div class="post_detail single_post">
                                                  <span class="ti-folder ti_icon"></span>
                                                  <span class="post_info_cat">
                                                                                                            <a href="#">Career</a>
                                                                                                            &nbsp;&middot;&nbsp; <a href="#">Entrepreneur</a> &nbsp;&middot;&nbsp;
                                                                                                            <a href="#">Life</a>
                                                                                                        </span>
                                                </div>
                                                <div class="post_header_title">
                                                  <h5>
                                                    <a href="#" title="3 Clear Warnings That Say Your Goals Are Too Small">
                                                      3 Clear Warnings That Say Your Goals Are Too Small
                                                    </a>
                                                  </h5>
                                                </div>
                                              </div>

                                              <div class="post_header_wrapper"></div>
                                            </div>
                                          </div>
                                        </div>

                                        <!-- End each blog post --><!-- Begin each blog post -->
                                        <div
                                          class="blog-posts-grid post-198 post type-post status-publish format-standard has-post-thumbnail hentry category-career category-entrepreneur category-life tag-direction tag-vision-goal-setting"
                                        >
                                          <div class="post_wrapper">
                                            <div class="post_img static">
                                              <div class="post_img_hover">
                                                <img src="upload/thinking-man-at-work-U7PFMZW-960x550.jpg" class="" alt="" />
                                                <a href="#"></a>
                                              </div>
                                            </div>

                                            <div class="post_content_wrapper text_left">
                                              <div class="post_header">
                                                <div class="post_detail single_post">
                                                  <span class="ti-folder ti_icon"></span>
                                                  <span class="post_info_cat">
                                                      <a href="#">Career</a>
                                                      &nbsp;&middot;&nbsp; <a href="#">Entrepreneur</a> &nbsp;&middot;&nbsp;
                                                      <a href="#">Life</a>
                                                  </span>
                                                </div>
                                                <div class="post_header_title">
                                                  <h5>
                                                    <a
                                                      href="#"
                                                      title="Questions every business owner must be able to answer correctly"
                                                    >
                                                      Questions every business owner must be able to answer correctly
                                                    </a>
                                                  </h5>
                                                </div>
                                              </div>

                                              <div class="post_header_wrapper"></div>
                                            </div>
                                          </div>
                                        </div>

                                        <!-- End each blog post -->
                                      </div>
                                      <br class="clear" />
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
                <div class="comment_disable_clearer"></div>
              </div>
            </div>
            <!-- End main content -->
          </div>
          <br class="clear" />
        </div>
        <!-- End main content -->
      </div>
      <br class="clear" />
    </div>
  </div>
@endsection
