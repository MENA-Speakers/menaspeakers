<x-mail::message>

  Dear {{ $speaker->first_name }},

  I hope you are doing spectacularly great.
  We come with good news. Congratulations! You have been shortlisted for the upcoming event with "{{ $deal->client_name }}" for an {{ $deal->event_type }} on {{ $deal->event_date }} in
  {{ $deal->location }}.

  The agent will be in touch with you shortly to discuss the details of the event.

  Yay! Keep shining and keep inspiring!

  Best regards,

  {{ $deal->responsible->name}}
  {{ $deal->responsible->phone}}
</x-mail::message>
