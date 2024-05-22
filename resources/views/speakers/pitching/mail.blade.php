<x-mail::message>
# You have been pitched to a client

  Hello {{ $speaker->first_name }},

  I hope you are well!

  Please note that I have pitched you to "{{ $deal->client_name }}" for an {{ $deal->event_type }} on {{ $deal->event_date }} in
  {{ $deal->location }}.

  Please notify us if you are not available on that date and note we're still in the pitch stage. If you do not hear from us in the next week then please release the date.
  Please let me know if they reach out directly to you and kindly redirect them back to me.
  Thank you!

  Keep shining and keep inspiring!

  Best regards,

  {{ $deal->responsible->name}}
  {{ $deal->responsible->phone}}

</x-mail::message>


