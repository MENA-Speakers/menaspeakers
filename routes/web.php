<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\DashboardController;
  use App\Http\Controllers\Admin\SpeakerController;
  use App\Http\Controllers\BlogsController;
  use App\Http\Controllers\FaqsController;
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
Route::get('/speakers', [SpeakersController::class, 'index'])->name('speakers.index');
Route::post('/speakers', [SpeakersController::class, 'store'])->name('speakers.store');
Route::get('/speakers/{speaker}', [SpeakersController::class, 'show'])->name('speakers.show');
Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{blog}', [BlogsController::class, 'show'])->name('blogs.show');


  Route::get('profile', [PagesController::class, 'profile'])->name('pages.profile');
  Route::get('profile-arabic', [PagesController::class, 'profileArabic'])->name('pages.profile.arabic');
  Route::get('/FAQs', [FaqsController::class, 'index'])->name('faqs.index');
  Route::get('page/terms-condition', [PagesController::class, 'terms'])->name('pages.terms');
Route::get('page/contact', [PagesController::class, 'contact'])->name('pages.contact');
Route::get('page/refund-policy', [PagesController::class, 'policy'])->name('pages.policy');

Route::middleware('auth')->name('admin.')->prefix('admin')->group(function() {
  Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');

  Route::get('speakers', [SpeakerController::class, 'index'])->name('speakers.index');
  Route::post('speakers', [SpeakerController::class, 'store'])->name('speakers.store');
  Route::get('speakers/create', [SpeakerController::class, 'create'])->name('speakers.create');
  Route::get('speakers/{speaker}/edit', [SpeakerController::class, 'edit'])->name('speakers.edit');
  Route::post('speakers/{speaker}', [SpeakerController::class, 'update'])->name('speakers.update');
  Route::post('speakers/{speaker}/delete', [SpeakerController::class, 'destroy'])->name('speakers.delete');


  Route::get('blogs', [AdminBlogController::class, 'index'])->name('blogs.index');
  Route::post('blogs', [AdminBlogController::class, 'store'])->name('blogs.store');
  Route::get('blogs/create', [AdminBlogController::class, 'create'])->name('blogs.create');
  Route::get('blogs/{blog}/edit', [AdminBlogController::class, 'edit'])->name('blogs.edit');
  Route::post('blogs/{blog}', [AdminBlogController::class, 'update'])->name('blogs.update');

  //Site map route
  Route::get('sitemap', function(){
    dd('HI');
    $sitemap = Sitemap::create()
    ->add(route('index'))
    ->add(route('speakers.index'))
    ->add(route('blogs.index'))
    ->add(route('pages.profile'));

    Speaker::all()->each(function($speaker) use ($sitemap){
      $sitemap->add(route('speakers.show', $speaker->slug));
    });

    $sitemap->writeToFile(public_path('sitemap.xml'));

  })->name('sitemap');

});

Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
