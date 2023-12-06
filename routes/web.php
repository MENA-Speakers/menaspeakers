<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminProfileVideoController;
  use App\Http\Controllers\Admin\DashboardController;
  use App\Http\Controllers\Admin\AdminProfileController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\BlogsController;
  use App\Http\Controllers\DealController;
  use App\Http\Controllers\ExternalSiteController;
  use App\Http\Controllers\FaqsController;
  use App\Http\Controllers\GalleryController;
  use App\Http\Controllers\HomeController;
  use App\Http\Controllers\LocationController;
  use App\Http\Controllers\PagesController;
  use App\Http\Controllers\ProposalController;
  use App\Http\Controllers\ProfilesController;
  use App\Models\Speaker;
  use Illuminate\Support\Facades\Route;
  use Spatie\Sitemap\Sitemap;

  /*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
  */

  Route::get('/', [HomeController::class, 'index'])->name('index');

  Route::controller(ProfilesController::class)->group(function () {
    Route::get('/speakers', 'index')->name('speakers.index');
    Route::get('/speakers/{speaker}', 'show')->name('speakers.show');
  });

  Route::get('/location/{location}', [LocationController::class, 'show'])->name('location.show');
  Route::get('/location/{location}/search', [LocationController::class, 'search'])->name('location.speakers.search');


  Route::get('/gallery/', [GalleryController::class, 'index'])->name('gallery.index');
  Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index');
  Route::get('/blogs/{blog}', [BlogsController::class, 'show'])->name('blogs.show');


  Route::get('profile', [PagesController::class, 'profile'])->name('pages.profile');
  Route::get('profile-arabic', [PagesController::class, 'profileArabic'])->name('pages.profile.arabic');
  Route::get('/faqs', [FaqsController::class, 'index'])->name('faqs.index');
  Route::get('page/terms-condition', [PagesController::class, 'terms'])->name('pages.terms');
  Route::get('contact', [PagesController::class, 'contact'])->name('pages.contact');
  Route::get('page/refund-policy', [PagesController::class, 'policy'])->name('pages.policy');


  //External site routes
  Route::group(['prefix' => 'external', 'as' => 'external.'], function () {
    Route::get('sports', [ExternalSiteController::class, 'sports'])->name('sports');
    Route::get('wellness', [ExternalSiteController::class, 'wellness'])->name('wellness');
    Route::get('coaching', [ExternalSiteController::class, 'coaching'])->name('coaching');
  });


  //Site map route
  Route::get('sitemap', function() {
    $sitemap = Sitemap::create()
      ->add(route('index'))
      ->add(route('speakers.index'))
      ->add(route('blogs.index'))
      ->add(route('pages.profile'));

    Speaker::all()->each(function($speaker) use ($sitemap) {
      $sitemap->add(route('speakers.show', $speaker->slug));
    });

    $sitemap->writeToFile(public_path('sitemap.xml'));

  })->name('sitemap');

  Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

  require __DIR__ . '/admin.php';
  require __DIR__ . '/auth.php';
