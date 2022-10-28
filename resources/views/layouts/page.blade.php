@extends('layouts.index')

@section('content')
  <!-- Begin mobile menu -->
  <a id="close_mobile_menu" href="javascript:;"></a>

  <div class="mobile_menu_wrapper">
    <div class="mobile_menu_content">
      <div class="menu-main-menu-container">
        <ul id="mobile_main_menu" class="mobile_main_nav">
          <li class="menu-item menu-item-has-children" >
            <a href="index.html" aria-current="page">Home</a>
            <ul class="sub-menu">
              <li class="menu-item">
                <a href="index.html" aria-current="page">Home 1</a>
              </li>
              <li class="menu-item"><a href="home2.html">Home 2</a></li>
              <li class="menu-item"><a href="home3.html">Home 3</a></li>
              <li class="menu-item"><a href="home4.html">Home 4</a></li>
              <li class="menu-item"><a href="home5.html">Home 5</a></li>
              <li class="menu-item"><a href="home6.html">Home 6</a></li>
              <li class="menu-item"><a href="home7.html">Home 7</a></li>
            </ul>
          </li>
          <li class="megamenu col4 menu-item menu-item-has-children">
            <a href="#">Slider</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 1</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="vertical-parallax-slider.html">Vertical Parallax Slider</a></li>
                  <li class="menu-item"><a href="animated-framed-slider.html">Animated Framed Slider</a></li>
                  <li class="menu-item"><a href="3d-room-slider.html">3D Room Slider</a></li>
                  <li class="menu-item"><a href="velo-slider.html">Velo Slider</a></li>
                  <li class="menu-item"><a href="popout-slider.html">Popout Slider</a></li>
                  <li class="menu-item"><a href="mouse-driven-vertical-carousel.html">Mouse Driven Vertical Carousel</a></li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 2</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="clip-path-slider.html">Clip Path Slider</a></li>
                  <li class="menu-item"><a href="split-slick-slider.html">Split Slick Slider</a></li>
                  <li class="menu-item"><a href="fullscreen-transitions-slider.html">Fullscreen Transitions Slider</a></li>
                  <li class="menu-item"><a href="flip-slider.html">Flip Slider</a></li>
                  <li class="menu-item"><a href="horizontal-slider.html">Horizontal Slider</a></li>
                  <li class="menu-item"><a href="synchronized-carousel-slider.html">Synchronized Carousel Slider</a></li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 3</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="multi-layouts-slider.html">Multi Layouts Slider</a></li>
                  <li class="menu-item"><a href="split-carousel-slider.html">Split Carousel Slider</a></li>
                  <li class="menu-item"><a href="property-clip-slider.html">Property Clip Slider</a></li>
                  <li class="menu-item"><a href="slice-slider.html">Slice Slider</a></li>
                  <li class="menu-item"><a href="parallax-slider.html">Parallax Slider</a></li>
                  <li class="menu-item"><a href="zoom-slider.html">Zoom Slider</a></li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 4</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="animated-slider.html">Animated Slider</a></li>
                  <li class="menu-item"><a href="motion-reveal-slider.html">Motion Reveal Slider</a></li>
                  <li class="menu-item"><a href="fade-up-slider.html">Fade up Slider</a></li>
                  <li class="menu-item"><a href="image-carousel-slider.html">Image Carousel Slider</a></li>
                  <li class="menu-item"><a href="glitch-slideshow.html">Glitch Slideshow</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="megamenu col4 menu-item menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 1</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="about-1.html">About 1</a></li>
                  <li class="menu-item"><a href="about-2.html">About 2</a></li>
                  <li class="menu-item"><a href="about-3.html">About 3</a></li>
                  <li class="menu-item"><a href="success-stories.html">Success Stories</a></li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 2</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="start-here-1.html">Start Here 1</a></li>
                  <li class="menu-item"><a href="start-here-2.html">Start Here 2</a></li>
                  <li class="menu-item"><a href="start-here-3.html">Start Here 3</a></li>
                  <li class="menu-item"><a href="contact-1.html">Contact 1</a></li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="#">Column 3</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="contact-2.html">Contact 2</a></li>
                  <li class="menu-item"><a href="contact-3.html">Contact 3</a></li>
                  <li class="menu-item"><a href="popup-box.html">Popup Box</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Courses</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="course-grid.html">Course Grid 1</a></li>
              <li class="menu-item"><a href="course-grid-2.html">Course Grid 2</a></li>
              <li class="menu-item"><a href="course-grid-no-space.html">Course Grid No Space</a></li>
              <li class="menu-item"><a href="market-and-digital-technology.html">Single Course</a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Portfolio</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="portfolio-classic.html">Portfolio Classic</a></li>
              <li class="menu-item"><a href="portfolio-grid.html">Portfolio Grid</a></li>
              <li class="menu-item"><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
              <li class="menu-item"><a href="portfolio-coverflow.html">Portfolio Coverflow</a></li>
              <li class="menu-item"><a href="portfolio-timeline-horizon.html">Portfolio Timeline Horizon</a></li>
              <li class="menu-item"><a href="portfolio-timeline-vertical.html">Portfolio Timeline Vertical</a></li>
              <li class="menu-item"><a href="portfolio-slider-horizon.html">Portfolio Slider Horizon</a></li>
              <li class="menu-item"><a href="portfolio-slice-slider.html">Portfolio Slice Slider</a></li>
              <li class="menu-item"><a href="single-portfolio.html">Single Portfolio</a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Media</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="gallery-grid.html">Gallery Grid</a></li>
              <li class="menu-item"><a href="gallery-grid-no-space.html">Gallery Grid No Space</a></li>
              <li class="menu-item"><a href="gallery-masonry.html">Gallery Masonry</a></li>
              <li class="menu-item"><a href="gallery-masonry-no-space.html">Gallery Masonry No Space</a></li>
              <li class="menu-item"><a href="gallery-justified.html">Gallery Justified</a></li>
              <li class="menu-item"><a href="gallery-justified-no-space.html">Gallery Justified No Space</a></li>
              <li class="menu-item"><a href="gallery-preview.html">Gallery Preview</a></li>
              <li class="menu-item"><a href="gallery-fullscreen.html">Gallery Fullscreen</a></li>
              <li class="menu-item"><a href="gallery-horizontal.html">Gallery Horizontal</a></li>
              <li class="menu-item"><a href="video-grid.html">Video Grid</a></li>
              <li class="menu-item"><a href="video-grid-no-space.html">Video Grid No Space</a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-children">
            <a href="#">Blog</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="blog-grid-no-space.html">Blog Grid No Space</a></li>
              <li class="menu-item"><a href="blog-grid.html">Blog Grid</a></li>
              <li class="menu-item"><a href="blog-masonry.html">Blog Masonry</a></li>
              <li class="menu-item"><a href="blog-metro-no-space.html">Blog Metro No Space</a></li>
              <li class="menu-item"><a href="blog-metro.html">Blog Metro</a></li>
              <li class="menu-item"><a href="blog-classic.html">Blog Classic</a></li>
              <li class="menu-item"><a href="blog-list.html">Blog List</a></li>
              <li class="menu-item"><a href="blog-list-circle.html">Blog List Circle</a></li>
            </ul>
          </li>
        </ul>
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
                  <div class="elementor-element elementor-element-8f7cb79 elementor-column elementor-col-33 elementor-top-column"
                       data-id="8f7cb79"
                       data-element_type="column"
                       data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}' >
                    <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-72e2600 elementor-hidden-tablet elementor-hidden-phone elementor-widget__width-auto elementor-widget elementor-widget-dotlife-navigation-menu"
                             data-id="72e2600"
                             data-element_type="widget"
                             data-settings='{"dotlife_ext_is_scrollme":"false","dotlife_ext_is_smoove":"false","dotlife_ext_is_parallax_mouse":"false","dotlife_ext_is_infinite":"false","dotlife_ext_is_fadeout_animation":"false"}'
                             data-widget_type="dotlife-navigation-menu.default" >
                          <div class="elementor-widget-container">
                            <div class="tg_navigation_wrapper menu_style2">
                              <div class="menu-main-menu-left-container">
                                <ul id="nav_menu24" class="nav">
                                  <li class="menu-item menu-item-has-children arrow">
                                    <a href="index.html">Home</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item"><a href="index.html">Home 1</a></li>
                                      <li class="menu-item"><a href="home2.html">Home 2</a></li>
                                      <li class="menu-item"><a href="home3.html">Home 3</a></li>
                                      <li class="menu-item"><a href="home4.html">Home 4</a></li>
                                      <li class="menu-item"><a href="home5.html">Home 5</a></li>
                                      <li class="menu-item"><a href="home6.html">Home 6</a></li>
                                      <li class="menu-item"><a href="home7.html">Home 7</a></li>
                                    </ul>
                                  </li>
                                  <li class="megamenu col4 menu-item menu-item-has-children arrow">
                                    <a href="#">Slider</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 1</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="vertical-parallax-slider.html">Vertical Parallax Slider</a></li>
                                          <li class="menu-item"><a href="animated-framed-slider.html">Animated Framed Slider</a></li>
                                          <li class="menu-item"><a href="3d-room-slider.html">3D Room Slider</a></li>
                                          <li class="menu-item"><a href="velo-slider.html">Velo Slider</a></li>
                                          <li class="menu-item"><a href="popout-slider.html">Popout Slider</a></li>
                                          <li class="menu-item">
                                            <a href="mouse-driven-vertical-carousel.html">Mouse Driven Vertical Carousel</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 2</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="clip-path-slider.html">Clip Path Slider</a></li>
                                          <li class="menu-item"><a href="split-slick-slider.html">Split Slick Slider</a></li>
                                          <li class="menu-item">
                                            <a href="fullscreen-transitions-slider.html">Fullscreen Transitions Slider</a>
                                          </li>
                                          <li class="menu-item"><a href="flip-slider.html">Flip Slider</a></li>
                                          <li class="menu-item"><a href="horizontal-slider.html">Horizontal Slider</a></li>
                                          <li class="menu-item">
                                            <a href="synchronized-carousel-slider.html">Synchronized Carousel Slider</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 3</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="multi-layouts-slider.html">Multi Layouts Slider</a></li>
                                          <li class="menu-item"><a href="split-carousel-slider.html">Split Carousel Slider</a></li>
                                          <li class="menu-item"><a href="property-clip-slider.html">Property Clip Slider</a></li>
                                          <li class="menu-item"><a href="slice-slider.html">Slice Slider</a></li>
                                          <li class="menu-item"><a href="parallax-slider.html">Parallax Slider</a></li>
                                          <li class="menu-item"><a href="zoom-slider.html">Zoom Slider</a></li>
                                        </ul>
                                      </li>
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 4</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="animated-slider.html">Animated Slider</a></li>
                                          <li class="menu-item"><a href="motion-reveal-slider.html">Motion Reveal Slider</a></li>
                                          <li class="menu-item"><a href="fade-up-slider.html">Fade up Slider</a></li>
                                          <li class="menu-item"><a href="image-carousel-slider.html">Image Carousel Slider</a></li>
                                          <li class="menu-item"><a href="glitch-slideshow.html">Glitch Slideshow</a></li>

                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="megamenu col4 menu-item current-menu-ancestor menu-item-has-children arrow">
                                    <a href="#">Pages</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 1</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="about-1.html">About 1</a></li>
                                          <li class="menu-item"><a href="about-2.html">About 2</a></li>
                                          <li class="menu-item"><a href="about-3.html">About 3</a></li>
                                          <li class="menu-item"><a href="success-stories.html">Success Stories</a></li>
                                        </ul>
                                      </li>
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 2</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="start-here-1.html">Start Here 1</a></li>
                                          <li class="menu-item"><a href="start-here-2.html">Start Here 2</a></li>
                                          <li class="menu-item"><a href="start-here-3.html">Start Here 3</a></li>
                                          <li class="menu-item"><a href="contact-1.html">Contact 1</a></li>
                                        </ul>
                                      </li>
                                      <li class="menu-item menu-item-has-children arrow">
                                        <a href="#">Column 3</a>
                                        <ul class="sub-menu">
                                          <li class="menu-item"><a href="contact-2.html">Contact 2</a></li>
                                          <li class="menu-item"><a href="contact-3.html">Contact 3</a></li>
                                          <li class="menu-item"><a href="popup-box.html">Popup Box</a></li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="menu-item menu-item-has-children arrow">
                                    <a href="#">Courses</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item"><a href="course-grid.html">Course Grid 1</a></li>
                                      <li class="menu-item"><a href="course-grid-2.html">Course Grid 2</a></li>
                                      <li class="menu-item"><a href="course-grid-no-space.html">Course Grid No Space</a></li>
                                      <li class="menu-item"><a href="market-and-digital-technology.html">Single Course</a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="elementor-element elementor-element-04c2420 elementor-column elementor-col-33 elementor-top-column"
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
                              <a href="index.htm">
                                <img
                                  width="320"
                                  height="174"
                                  src="upload/logo_jessica.png"
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
                  <div class="elementor-element elementor-element-ea0a70c text_alignright elementor-column elementor-col-33 elementor-top-column"
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
                                  <li class="menu-item menu-item-has-children arrow">
                                    <a href="#">Portfolio</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item"><a href="portfolio-classic.html">Portfolio Classic</a></li>
                                      <li class="menu-item"><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                      <li class="menu-item"><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                                      <li class="menu-item"><a href="portfolio-coverflow.html">Portfolio Coverflow</a></li>
                                      <li class="menu-item"><a href="portfolio-timeline-horizon.html">Portfolio Timeline Horizon</a></li>
                                      <li class="menu-item"><a href="portfolio-timeline-vertical.html">Portfolio Timeline Vertical</a></li>
                                      <li class="menu-item"><a href="portfolio-slider-horizon.html">Portfolio Slider Horizon</a></li>
                                      <li class="menu-item"><a href="portfolio-slice-slider.html">Portfolio Slice Slider</a></li>
                                      <li class="menu-item"><a href="single-portfolio.html">Single Portfolio</a></li>
                                    </ul>
                                  </li>
                                  <li class="menu-item menu-item-has-children arrow">
                                    <a href="#">Media</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item"><a href="gallery-grid.html">Gallery Grid</a></li>
                                      <li class="menu-item"><a href="gallery-grid-no-space.html">Gallery Grid No Space</a></li>
                                      <li class="menu-item"><a href="gallery-masonry.html">Gallery Masonry</a></li>
                                      <li class="menu-item"><a href="gallery-masonry-no-space.html">Gallery Masonry No Space</a></li>
                                      <li class="menu-item"><a href="gallery-justified.html">Gallery Justified</a></li>
                                      <li class="menu-item"><a href="gallery-justified-no-space.html">Gallery Justified No Space</a></li>
                                      <li class="menu-item"><a href="gallery-preview.html">Gallery Preview</a></li>
                                      <li class="menu-item"><a href="gallery-fullscreen.html">Gallery Fullscreen</a></li>
                                      <li class="menu-item"><a href="gallery-horizontal.html">Gallery Horizontal</a></li>
                                      <li class="menu-item"><a href="video-grid.html">Video Grid</a></li>
                                      <li class="menu-item"><a href="video-grid-no-space.html">Video Grid No Space</a></li>
                                    </ul>
                                  </li>
                                  <li class="menu-item menu-item-has-children arrow">
                                    <a href="#">Blog</a>
                                    <ul class="sub-menu">
                                      <li class="menu-item"><a href="blog-grid-no-space.html">Blog Grid No Space</a></li>
                                      <li class="menu-item"><a href="blog-grid.html">Blog Grid</a></li>
                                      <li class="menu-item"><a href="blog-masonry.html">Blog Masonry</a></li>
                                      <li class="menu-item"><a href="blog-metro-no-space.html">Blog Metro No Space</a></li>
                                      <li class="menu-item"><a href="blog-metro.html">Blog Metro</a></li>
                                      <li class="menu-item"><a href="blog-classic.html">Blog Classic</a></li>
                                      <li class="menu-item"><a href="blog-list.html">Blog List</a></li>
                                      <li class="menu-item"><a href="blog-list-circle.html">Blog List Circle</a></li>
                                    </ul>
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

    @yield('content')
  </div>
@endsection
