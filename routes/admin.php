<?php

  use App\Http\Controllers\Admin\AdminBlogController;
  use App\Http\Controllers\Admin\AdminHomeController;
  use App\Http\Controllers\Admin\AdminProfileBioController;
  use App\Http\Controllers\Admin\AdminProfileController;
  use App\Http\Controllers\Admin\AdminProfileVideoController;
  use App\Http\Controllers\Admin\AdminRateCardController;
  use App\Http\Controllers\Admin\AdminProfileMediaController;
  use App\Http\Controllers\Admin\AdminSpeakerPortfolioController;
  use App\Http\Controllers\Admin\AdminSpeakerProposalController;
  use App\Http\Controllers\Admin\EmployeeController;
  use App\Http\Controllers\Admin\PortfolioController;
  use App\Http\Controllers\Admin\ProposalPortfolioController;
  use App\Http\Controllers\Admin\ProposalRateCardController;
  use App\Http\Controllers\Admin\RateCardVideoController;
  use App\Http\Controllers\Admin\ReferralController;
  use App\Http\Controllers\Admin\SettingController;
  use App\Http\Controllers\Admin\AdminSpeakerController;
  use App\Http\Controllers\AdminGalleryController;
  use App\Http\Controllers\AdminSpeakerVideoController;
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


    //Employees Routes
    Route::get('employees', [EmployeeController::class, 'index'])->name('employees.index');
    Route::get('employees/create', [EmployeeController::class, 'create'])->name('employees.create');


    //Portfolios Routes
    Route::get('portfolios', [PortfolioController::class, 'index'])->name('portfolios.index');
    Route::post('portfolios', [PortfolioController::class, 'store'])->name('portfolios.store');
    Route::get('portfolios/create', [PortfolioController::class, 'create'])->name('portfolios.create');
    Route::get('portfolios/{portfolio}/edit', [PortfolioController::class, 'edit'])->name('portfolios.edit');
    Route::post('portfolios/{portfolio}', [PortfolioController::class, 'update'])->name('portfolios.update');
    Route::post('portfolios/{portfolio}/delete', [PortfolioController::class, 'destroy'])->name('portfolios.delete');


    //Rate Cards Routes
    Route::get('rate-cards', [AdminRateCardController::class, 'index'])->name('rate-cards.index');
    Route::post('rate-cards', [AdminRateCardController::class, 'store'])->name('rate-cards.store');
    Route::get('rate-cards/create', [AdminRateCardController::class, 'create'])->name('rate-cards.create');
    Route::get('rate-cards/{rateCard}/edit', [AdminRateCardController::class, 'edit'])->name('rate-cards.edit');
    Route::post('rate-cards/{rateCard}', [AdminRateCardController::class, 'update'])->name('rate-cards.update');
    Route::post('rate-cards/{rateCard}/videos', [AdminRateCardController::class, 'update'])->name('rate-cards.videos.store');
    Route::post('rate-cards/{rateCard}/delete', [AdminRateCardController::class, 'destroy'])->name('rate-cards.delete');

    //Profile Videos
    Route::get('profiles/{profile}/videos', [AdminProfileVideoController::class, 'index'])->name('profiles.videos');
    Route::post('profiles/{profile}/videos', [AdminProfileVideoController::class, 'store'])->name('profiles.videos.store');
    Route::post('profiles/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('profiles.videos.destroy');

    //Profile Rate Cards
    Route::get('profiles/{profile}/rate-cards', [AdminRateCardController::class, 'index'])->name('profiles.rate-cards');
    Route::post('profiles/{profile}/rate-cards', [AdminSpeakerPortfolioController::class, 'store'])->name('profiles.rate-cards.store');
    Route::post('profiles/{portfolio}/rate-cards/delete', [AdminSpeakerPortfolioController::class, 'destroy'])->name('profiles.rate-cards.destroy');
    Route::post('profiles/{portfolio}/rate-cards/update', [AdminSpeakerPortfolioController::class, 'update'])->name('profiles.rate-cards.update');
    Route::get('profiles/rate-cards/{portfolio}/edit', [AdminSpeakerPortfolioController::class, 'edit'])->name('profiles.rate-cards.edit');


    //Speaker Proposals
    Route::get('profile/{profile}/proposals', [AdminSpeakerProposalController::class, 'index'])->name('profiles.proposals');

    //Speaker Profile Media
    Route::get('profile/{profile}/media', [AdminProfileMediaController::class, 'index'])->name('profiles.media');
    Route::post('profile/{profile}/media', [AdminProfileMediaController::class, 'imageStore'])->name('profiles.media.store');

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
    Route::post('speakers/{speakers}/videos', [AdminSpeakerVideoController::class, 'store'])->name('speakers.videos.store');
    Route::post('speakers/videos/{video}/delete', [AdminProfileVideoController::class, 'destroy'])->name('speakers.videos.destroy');


    // Referrals route
    Route::get('referrals', [ReferralController::class, 'index'])->name('referrals.index');
    Route::post('referrals', [ReferralController::class, 'store'])->name('referrals.store');
    Route::get('referrals/create', [ReferralController::class, 'create'])->name('referrals.create');
    Route::get('referrals/{referral}/edit', [ReferralController::class, 'edit'])->name('referrals.edit');
    Route::post('referrals/{referral}', [ReferralController::class, 'update'])->name('referrals.update');
    Route::post('referrals/{referral}/delete', [ReferralController::class, 'destroy'])->name('referrals.delete');


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
    Route::get('proposals/{proposal}/rate-cards', [ProposalRateCardController::class, 'index'])->name('proposals.rate-cards.index');
    Route::post('proposals/{proposal}/rate-cards', [ProposalRateCardController::class, 'store'])->name('proposals.rate-cards.store');
    Route::post('proposals/{proposal}/rate-cards/{rateCard}', [ProposalRateCardController::class, 'update'])->name('proposals.rate-cards.update');
    Route::delete('proposals/rate-cards/{rateCard}', [ProposalRateCardController::class, 'destroy'])->name('proposals.rate-cards.delete');
    Route::post('proposals/rate-cards/{rateCard:hash_id}/videos', [RateCardVideoController::class, 'store'])->name('proposals.rate-cards.videos.store');
    Route::delete('proposals/rate-cards/{rateCard:hash_id}/videos/{video}', [RateCardVideoController::class, 'destroy'])->name('proposals.rate-cards.videos.delete');

    Route::post('proposals/{proposal}/update-status', [ProposalPortfolioController::class, 'updateStatus'])->name('proposals.update-status');
    Route::post('proposals/{proposal}/confirm-portfolio', [ProposalPortfolioController::class, 'confirmPortfolio'])->name('proposals.confirm-portfolio');

    Route::post('proposals/suggest/portfolios', [ProposalPortfolioController::class, 'index'])->name('proposals.portfolios.suggest');

    Route::get('proposals/{proposal}/edit', [ProposalController::class, 'edit'])->name('proposals.edit');
    Route::get('proposals/{proposal}/preview', [ProposalController::class, 'preview'])->name('proposals.preview');
    Route::post('proposals/{proposal}', [ProposalController::class, 'update'])->name('proposals.update');

    Route::post('proposals/{proposal}/delete', [ProposalController::class, 'destroy'])->name('proposals.delete');

  });

