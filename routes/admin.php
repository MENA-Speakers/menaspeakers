<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminProfileController;
  use App\Http\Controllers\Admin\AdminProfileVideoController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\Admin\SpeakerController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\DealController;
  use App\Http\Controllers\ProposalController;
  use Illuminate\Support\Facades\Route;

  Route::middleware('auth')->name('admin.')->prefix('crm')->group(function() {
    Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');

    //Speaker Routes Group
    Route::get('profiles', [AdminProfileController::class, 'index'])->name('profiles.index');
    Route::post('profiles/search', [AdminProfileController::class, 'search'])->name('profiles.search');
    Route::get('profiles/create', [AdminProfileController::class, 'create'])->name('profiles.create');
    Route::get('profiles/{profile}', [AdminProfileController::class, 'show'])->name('profiles.show');
    Route::post('profiles', [AdminProfileController::class, 'store'])->name('profiles.store');
    Route::get('profiles/{profile}/edit', [AdminProfileController::class, 'edit'])->name('profiles.edit');
    Route::post('profiles/{profile}', [AdminProfileController::class, 'update'])->name('profiles.update');
    Route::post('profiles/{profile}/delete', [AdminProfileController::class, 'destroy'])->name('profiles.delete');

    Route::get('profiles/{profile}/videos', [AdminProfileVideoController::class, 'index'])->name('profiles.videos');
    Route::post('profiles/{profile}/videos', [AdminProfileVideoController::class, 'store'])->name('profiles.videos.store');
    Route::post('profiles/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('profiles.videos.destroy');


    Route::get('speakers', [SpeakerController::class, 'index'])->name('speakers.index');

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

    Route::get('deals', [DealController::class, 'index'])->name('deals.index');
    Route::post('deals', [DealController::class, 'store'])->name('deals.store');
    Route::get('deals/create', [DealController::class, 'create'])->name('deals.create');
    Route::get('deals/{deal}/edit', [DealController::class, 'edit'])->name('deals.edit');
    Route::post('deals/{deal}', [DealController::class, 'update'])->name('deals.update');
    Route::post('deals/{deal}/delete', [DealController::class, 'destroy'])->name('deals.delete');

    //Proposal Routes
    Route::get('proposals', [ProposalController::class, 'index'])->name('proposals.index');
    Route::post('proposals', [ProposalController::class, 'store'])->name('proposals.store');
    Route::get('proposals/create', [ProposalController::class, 'create'])->name('proposals.create');

    Route::get('proposals/{proposal}', [ProposalController::class, 'show'])->name('proposals.show');

    Route::get('proposals/{proposal}/edit', [ProposalController::class, 'edit'])->name('proposals.edit');
    Route::post('proposals/{proposal}', [ProposalController::class, 'update'])->name('proposals.update');

    Route::post('proposals/{proposal}/delete', [ProposalController::class, 'destroy'])->name('proposals.delete');

    //Contacts routes
    Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::post('contacts', [ContactController::class, 'store'])->name('contacts.store');
    Route::get('contacts/create', [ContactController::class, 'create'])->name('contacts.create');
    Route::get('contacts/{contact}/edit', [ContactController::class, 'edit'])->name('contacts.edit');
    Route::post('contacts/{contact}', [ContactController::class, 'update'])->name('contacts.update');
    Route::post('contacts/{contact}/delete', [ContactController::class, 'destroy'])->name('contacts.delete');

    //Companies routes
    Route::get('companies', [CompanyController::class, 'index'])->name('companies.index');
    Route::post('companies', [CompanyController::class, 'store'])->name('companies.store');
    Route::get('companies/create', [CompanyController::class, 'create'])->name('companies.create');
    Route::get('companies/{company}/edit', [CompanyController::class, 'edit'])->name('companies.edit');
    Route::post('companies/{company}', [CompanyController::class, 'update'])->name('companies.update');
    Route::post('companies/{company}/delete', [CompanyController::class, 'destroy'])->name('companies.delete');


  });

