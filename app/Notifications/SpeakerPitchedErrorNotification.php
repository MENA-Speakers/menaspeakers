<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SpeakerPitchedErrorNotification extends Notification
{
    use Queueable;

    public $deal;
    public $speaker;

    /**
     * Create a new notification instance.
     */
    public function __construct($speaker, $deal)
    {
        $this->speaker = $speaker;
        $this->deal = $deal;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
      $speaker = $this->speaker;
      $deal = $this->deal;
        return (new MailMessage)
          ->markdown('speakers.pitching.mail-error', compact('speaker', 'deal'))
          ->bcc('tech@mena-speakers.com')
          ->subject('Unable to send email to: '.$speaker);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
