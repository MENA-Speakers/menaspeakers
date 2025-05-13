
Route::middleware(['auth'])->group(function () {
    Route::get('/blacklist', [BlacklistController::class, 'index'])->name('admin.blacklist.index');
    Route::post('/blacklist', [BlacklistController::class, 'store'])->name('admin.blacklist.store');
});

<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminProfileVideoController;
  use App\Http\Controllers\Admin\AdminSpeakerController;
  use App\Http\Controllers\Admin\AdminSpeakerGalleryController;
  use App\Http\Controllers\Admin\EmployeeController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\AdminCategoryController;
  use App\Http\Controllers\AdminFaqController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\AdminLeadController;
  use App\Http\Controllers\AdminSpeakerFaqController;
  use App\Http\Controllers\AdminSpeakerVideoController;
  use App\Http\Controllers\AdminTestimonialController;
  use App\Http\Controllers\AdminTopicController;
  use Illuminate\Support\Facades\Route;

  /**
       * Define routes for the admin panel, grouped by middleware and prefix.
       */
      Route::middleware('auth')->name('admin.')->prefix('crm')->group(function() {
        Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');


        // Employees Routes
        Route::get('employees', [EmployeeController::class, 'index'])->name('employees.index');
        Route::get('employees/create', [EmployeeController::class, 'create'])->name('employees.create');

        // FAQs
        Route::get('/faqs', [AdminFaqController::class, 'index'])->name('faqs.index');
        Route::post('/faqs', [AdminFaqController::class, 'store'])->name('faqs.store');
        Route::post('/faqs/{faq}/delete', [AdminFaqController::class, 'delete'])->name('faqs.destroy');



        // Gallery Routes
        Route::get('gallery', [AdminGalleryController::class, 'index'])->name('gallery.index');
        Route::post('gallery', [AdminGalleryController::class, 'store'])->name('gallery.store');
        Route::post('gallery/{gallery}', [AdminGalleryController::class, 'destroy'])->name('gallery.delete');

        // Blogs
        Route::get('blogs', [AdminBlogController::class, 'index'])->name('blogs.index');
        Route::post('blogs', [AdminBlogController::class, 'store'])->name('blogs.store');
        Route::get('blogs/create', [AdminBlogController::class, 'create'])->name('blogs.create');
        Route::get('blogs/{blog}/edit', [AdminBlogController::class, 'edit'])->name('blogs.edit');
        Route::post('blogs/{blog}', [AdminBlogController::class, 'update'])->name('blogs.update');
        Route::post('blogs/{blog}/delete', [AdminBlogController::class, 'destroy'])->name('blogs.delete');

        // Settings
        Route::get('settings/location', [SettingController::class, 'location'])->name('settings.location');
        Route::post('settings/location', [SettingController::class, 'store'])->name('settings.location.store');


        // Categories
        Route::get('/categories', [AdminCategoryController::class, 'index'])->name('categories.index');
        Route::post('/categories', [AdminCategoryController::class, 'store'])->name('categories.store');
        Route::post('/categories/{category:id}', [AdminCategoryController::class, 'delete'])->name('categories.destroy');

        // Topics
        Route::post('/topics', [AdminTopicController::class, 'store'])->name('topics.store');
        Route::post('/topics/{topic:id}', [AdminTopicController::class, 'delete'])->name('topics.destroy');

        // Front page speaker routes
        Route::get('speakers', [AdminSpeakerController::class, 'index'])->name('speakers.index');
        Route::post('speakers/search', [AdminSpeakerController::class, 'search'])->name('speakers.search');
        Route::get('speakers/create', [AdminSpeakerController::class, 'create'])->name('speakers.create');
        Route::get('speakers/{speaker}', [AdminSpeakerController::class, 'show'])->name('speakers.show');
        Route::post('speakers', [AdminSpeakerController::class, 'store'])->name('speakers.store');
        Route::get('speakers/{speaker}/edit', [AdminSpeakerController::class, 'edit'])->name('speakers.edit');
        Route::post('speakers/{speaker}', [AdminSpeakerController::class, 'update'])->name('speakers.update');
        Route::post('speakers/{speaker}/delete', [AdminSpeakerController::class, 'destroy'])->name('speakers.destroy');

        Route::get('speakers/{speakers}/videos', [AdminProfileVideoController::class, 'index'])->name('speakers.videos');
        Route::post('speakers/{speakers}/videos', [AdminSpeakerVideoController::class, 'store'])->name('speakers.videos.store');
        Route::post('speakers/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('speakers.videos.destroy');

        // Speaker FAQs
        Route::get('speakers/{speaker}/faqs', [AdminSpeakerFaqController::class, 'index'])->name('speakers.faqs');
        Route::post('speakers/{speaker}/faqs', [AdminSpeakerFaqController::class, 'store'])->name('speakers.faqs.store');

        // Gallery Routes
        Route::get('speakers/{speaker}/gallery', [AdminSpeakerGalleryController::class, 'index'])->name('speakers.gallery.index');
        Route::post('speakers/{speaker}/gallery', [AdminSpeakerGalleryController::class, 'store'])->name('speakers.gallery.store');
        Route::post('speakers/gallery/{gallery}', [AdminSpeakerGalleryController::class, 'destroy'])->name('speakers.gallery.delete');

        // Leads
        Route::get('leads', [AdminLeadController::class, 'index'])->name('leads.index');

        // Testimonials
        Route::get('testimonials', [AdminTestimonialController::class, 'index'])->name('testimonials.index');
        Route::post('testimonials', [AdminTestimonialController::class, 'store'])->name('testimonials.store');
        Route::post('testimonials/{testimonial}', [AdminTestimonialController::class, 'delete'])->name('testimonials.destroy');
      });
