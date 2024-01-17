<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminProfileBioController;
  use App\Http\Controllers\Admin\AdminProfileController;
  use App\Http\Controllers\Admin\AdminProfileVideoController;
  use App\Http\Controllers\Admin\AdminSpeakerMediaController;
  use App\Http\Controllers\Admin\AdminSpeakerPortfolioController;
  use App\Http\Controllers\Admin\AdminSpeakerProposalController;
  use App\Http\Controllers\Admin\PortfolioController;
  use App\Http\Controllers\Admin\ReferralController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\Admin\AdminSpeakerController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\DealController;
  use App\Http\Controllers\ProposalController;
  use Illuminate\Support\Facades\Route;

  Route::middleware('auth')->name('admin.')->prefix('crm')->group(function() {
    Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');

    //Proposal Profiles
    Route::get('profiles', [AdminProfileController::class, 'index'])->name('profiles.index');
    Route::post('profiles/search', [AdminProfileController::class, 'search'])->name('profiles.search');
    Route::get('profiles/create', [AdminProfileController::class, 'create'])->name('profiles.create');
    Route::get('profiles/{profile}', [AdminProfileController::class, 'show'])->name('profiles.show');
    Route::post('profiles', [AdminProfileController::class, 'store'])->name('profiles.store');
    Route::get('profiles/{profile}/edit', [AdminProfileController::class, 'edit'])->name('profiles.edit');
    Route::post('profiles/{profile}', [AdminProfileController::class, 'update'])->name('profiles.update');
    Route::post('profiles/{profile}/delete', [AdminProfileController::class, 'destroy'])->name('profiles.delete');

    //Profile Videos
    Route::get('profiles/{profile}/videos', [AdminProfileVideoController::class, 'index'])->name('profiles.videos');
    Route::post('profiles/{profile}/videos', [AdminProfileVideoController::class, 'store'])->name('profiles.videos.store');
    Route::post('profiles/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('profiles.videos.destroy');

    //Profile Bios
    Route::get('profiles/{profile}/bios', [AdminProfileBioController::class, 'index'])->name('profiles.bios');
    Route::post('profiles/{profile}/bios', [AdminProfileBioController::class, 'store'])->name('profiles.bios.store');
    Route::post('profiles/bios/{bio}/delete', [AdminProfileBioController::class, 'destroy'])->name('profiles.bios.destroy');
    Route::post('profiles/bios/{bio}/update', [AdminProfileBioController::class, 'update'])->name('profiles.bios.update');
    Route::get('profiles/bios/{bio}/edit', [AdminProfileBioController::class, 'edit'])->name('profiles.bios.edit');

    //Profile Portfolio AKA Rate Cards
    Route::get('profiles/{profile}/rate-cards', [AdminSpeakerPortfolioController::class, 'index'])->name('profiles.rate-cards');
    Route::post('profiles/{profile}/rate-cards', [AdminSpeakerPortfolioController::class, 'store'])->name('profiles.rate-cards.store');
    Route::post('profiles/rate-cards/{portfolio}/delete', [AdminSpeakerPortfolioController::class, 'destroy'])->name('profiles.rate-cards.destroy');
    Route::post('profiles/rate-cards/{portfolio}/update', [AdminSpeakerPortfolioController::class, 'update'])->name('profiles.rate-cards.update');
    Route::get('profiles/rate-cards/{portfolio}/edit', [AdminSpeakerPortfolioController::class, 'edit'])->name('profiles.rate-cards.edit');


    //Speaker Proposals
    Route::get('profile/{profile}/proposals', [AdminSpeakerProposalController::class, 'index'])->name('profiles.proposals');

    //Speaker Profile Media
    Route::get('profile/{profile}/media', [AdminSpeakerMediaController::class, 'media'])->name('profiles.media');

    //Speaker Profile Portfolios
    Route::get('profile/{profile}/portfolios', [AdminSpeakerPortfolioController::class, 'index'])->name('profiles.portfolios');

    // Front page speaker routes
    Route::get('speakers', [AdminSpeakerController::class, 'index'])->name('speakers.index');
    Route::post('speakers/search', [AdminSpeakerController::class, 'search'])->name('speakers.search');
    Route::get('speakers/create', [AdminSpeakerController::class, 'create'])->name('speakers.create');
    Route::get('speakers/{speaker}', [AdminSpeakerController::class, 'show'])->name('speakers.show');
    Route::post('speakers', [AdminSpeakerController::class, 'store'])->name('speakers.store');
    Route::get('speakers/{speaker}/edit', [AdminSpeakerController::class, 'edit'])->name('speakers.edit');
    Route::post('speakers/{speaker}', [AdminSpeakerController::class, 'update'])->name('speakers.update');
    Route::post('speakers/{speaker}/delete', [AdminSpeakerController::class, 'destroy'])->name('speakers.delete');

    Route::get('speakers/{speakers}/videos', [AdminProfileVideoController::class, 'index'])->name('speakers.videos');
    Route::post('speakers/{speakers}/videos', [AdminProfileVideoController::class, 'store'])->name('speakers.videos.store');
    Route::post('speakers/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('speakers.videos.destroy');


    // Referrals route
    Route::get('referrals', [ReferralController::class, 'index'])->name('referrals.index');
    Route::post('referrals', [ReferralController::class, 'store'])->name('referrals.store');
    Route::get('referrals/create', [ReferralController::class, 'create'])->name('referrals.create');
    Route::get('referrals/{referral}/edit', [ReferralController::class, 'edit'])->name('referrals.edit');
    Route::post('referrals/{referral}', [ReferralController::class, 'update'])->name('referrals.update');
    Route::post('referrals/{referral}/delete', [ReferralController::class, 'destroy'])->name('referrals.delete');


    //Bio Routes
    Route::get('rate-cards', [PortfolioController::class, 'index'])->name('portfolios.index');
    Route::post('rate-cards', [PortfolioController::class, 'store'])->name('portfolios.store');
    Route::get('rate-cards/create', [PortfolioController::class, 'create'])->name('portfolios.create');
    Route::get('rate-cards/{portfolio}/edit', [PortfolioController::class, 'edit'])->name('portfolios.edit');
    Route::post('rate-cards/{portfolio}', [PortfolioController::class, 'update'])->name('portfolios.update');
    Route::post('rate-cards/{portfolio}/delete', [PortfolioController::class, 'destroy'])->name('portfolios.delete');


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

  });

