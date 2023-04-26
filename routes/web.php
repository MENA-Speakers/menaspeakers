<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminSpeakerVideoController;
  use App\Http\Controllers\Admin\DashboardController;
  use App\Http\Controllers\Admin\AdminSpeakerController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\BlogsController;
  use App\Http\Controllers\FaqsController;
  use App\Http\Controllers\GalleryController;
  use App\Http\Controllers\HomeController;
  use App\Http\Controllers\PagesController;
  use App\Http\Controllers\SpeakersController;
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

  Route::controller(SpeakersController::class)->group(function () {
    Route::get('/speakers', 'index')->name('speakers.index');
    Route::get('/speakers/{speaker}', 'show')->name('speakers.show');
  });


  Route::get('/gallery/', [GalleryController::class, 'index'])->name('gallery.index');
  Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index');
  Route::get('/blogs/{blog}', [BlogsController::class, 'show'])->name('blogs.show');


  Route::get('profile', [PagesController::class, 'profile'])->name('pages.profile');
  Route::get('profile-arabic', [PagesController::class, 'profileArabic'])->name('pages.profile.arabic');
  Route::get('/faqs', [FaqsController::class, 'index'])->name('faqs.index');
  Route::get('page/terms-condition', [PagesController::class, 'terms'])->name('pages.terms');
  Route::get('page/contact', [PagesController::class, 'contact'])->name('pages.contact');
  Route::get('page/refund-policy', [PagesController::class, 'policy'])->name('pages.policy');

  Route::middleware('auth')->name('admin.')->prefix('admin')->group(function() {
    Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');

    //Speaker Routes Group
    Route::get('speakers', [ AdminSpeakerController::class, 'index'])->name('speakers.index');
    Route::post('speakers/search', [ AdminSpeakerController::class, 'search'])->name('speakers.search');
    Route::get('speakers/create', [ AdminSpeakerController::class, 'create'])->name('speakers.create');
    Route::get('speakers/{speaker}', [ AdminSpeakerController::class, 'show'])->name('speakers.show');
    Route::post('speakers', [ AdminSpeakerController::class, 'store'])->name('speakers.store');
    Route::get('speakers/{speaker}/edit', [ AdminSpeakerController::class, 'edit'])->name('speakers.edit');
    Route::post('speakers/{speaker}', [ AdminSpeakerController::class, 'update'])->name('speakers.update');
    Route::post('speakers/{speaker}/delete', [ AdminSpeakerController::class, 'destroy'])->name('speakers.delete');

    Route::get('speakers/{speaker}/videos', [ AdminSpeakerVideoController::class, 'index'])->name('speakers.videos');
    Route::post('speakers/{speaker}/videos', [ AdminSpeakerVideoController::class, 'store'])->name('speakers.videos.store');
    Route::post('speakers/videos/{video}/delete', [ AdminSpeakerVideoController::class, 'destroy'])->name('speakers.videos.destroy');

    //Gallery Routes
    Route::get('gallery', [AdminGalleryController::class, 'index'])->name('gallery.index');
    Route::post('gallery', [AdminGalleryController::class, 'store'])->name('gallery.store');
    Route::post('gallery/{gallery}', [AdminGalleryController::class, 'destroy'])->name('gallery.delete');




    Route::get('blogs', [AdminBlogController::class, 'index'])->name('blogs.index');
    Route::post('blogs', [AdminBlogController::class, 'store'])->name('blogs.store');
    Route::get('blogs/create', [AdminBlogController::class, 'create'])->name('blogs.create');
    Route::get('blogs/{blog}/edit', [AdminBlogController::class, 'edit'])->name('blogs.edit');
    Route::post('blogs/{blog}', [AdminBlogController::class, 'update'])->name('blogs.update');
    Route::post('blogs/{blog}/delete', [AdminBlogController::class, 'destroy'])->name('blogs.delete');

    //settings
    Route::get('settings/location', [SettingController::class, 'location'])->name('settings.location');
    Route::post('settings/location', [SettingController::class, 'store'])->name('settings.location.store');

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

  require __DIR__ . '/auth.php';
