<x-mail::message>
# Error in sending email to {{ $speaker }} regarding the pitch to {{ $deal->client_name }}

  Deal: {{ $deal->title }}
  Client: {{ $deal->client_name }}
  Event Type: {{ $deal->event_type }}
  Event Date: {{ $deal->event_date }}

  Error in sending email to {{ $speaker }}. Email is not available in the database.
  Forward this email to tech@mena-speakers.com with Speaker's working email address.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
