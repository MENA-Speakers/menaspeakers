<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BirthdayEmail extends Mailable
{
  use Queueable, SerializesModels;

  public $profile;

  /**
   * Create a new message instance.
   */
  public function __construct($profile)
  {
    $this->profile = $profile;
  }

  /**
   * Get the message envelope.
   */
  public function envelope(): Envelope
  {
    return new Envelope(
      subject: 'Happy Birthday from the MENA Speakers Family! 🎈',
    );
  }

  /**
   * Get the message content definition.
   */
  public function content(): Content
  {
    return new Content(
      markdown: 'emails.birthday',
    );
  }

  /**
   * Get the attachments for the message.
   *
   * @return array<int, \Illuminate\Mail\Mailables\Attachment>
   */
  public function attachments(): array
  {
    return [];
  }

  public function build(): BirthdayEmail
  {
    return $this->to($this->profile->email)
      ->subject('Happy Birthday from MENA Speakers! 🎈')
      ->bcc('tech@mena-speakers.com')
      ->bcc('saana@mena-speakers.com')
      ->bcc('socials@mena-speakers.com')
      ->markdown('emails.birthday', ['profile' => $this->profile]);
  }
}
