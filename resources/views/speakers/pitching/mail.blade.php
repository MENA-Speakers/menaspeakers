<x-mail::message>
# You have been pitched to a client

  Hello {{ $speaker->first_name }},

  I hope you are well!

  Please note that I have pitched you to "{{ $deal->client_name }}" for an {{ $deal->event_type }} on {{ $deal->event_date }} in (Location).

  We're still in the pitch stage and I will keep you in the loop as we move forward and have updates.

  Please let me know if they reach out directly to you and kindly redirect them back to me. Thank you!

  Best regards,
  {{ $deal->responsible->name}}
  {{ $deal->responsible->phone}}

</x-mail::message>
