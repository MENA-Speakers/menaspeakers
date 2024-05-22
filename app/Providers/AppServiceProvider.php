<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use PostHog\PostHog;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      JsonResource::withoutWrapping();
      Blade::component('mail.message', 'x-mail');
      Blade::component('mail.button', 'x-mail');
      PostHog::init(
        'phc_5O2GnTcnikc0fd7iKLMrPoYdw49KP9nTfe2GcATX2BN',
        [
          'host' => "https://us.i.posthog.com"
        ]
      );
    }
}
