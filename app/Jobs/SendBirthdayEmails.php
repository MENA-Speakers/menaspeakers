<?php

namespace App\Jobs;

use App\Mail\BirthdayEmail;
use App\Models\Profile;
use App\Notifications\BirthdayWish;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendBirthdayEmails implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
  public function handle(): void
  {
    $profiles = Profile::whereDate('birthday', now()->format('Y-m-d'))->get();

    foreach ($profiles as $profile) {
      Mail::to($profile->email)->send(new BirthdayEmail($profile));
    }
  }
}
