<x-mail::message>
# New Lead from mena-speakers.com


|         |                                        |
|---------|----------------------------------------|
| Source  | {{ $lead->source }}                    |
| Name    | {{ $lead->name }}                      |
| Phone   | {{ $lead->phone }}                     |
| Email   | {{ $lead->email }}                     |
@if($lead->company)
| Company | {{ $lead->company }}                   |
@endif
| Message | {{ $lead->message }}                   |
@if($lead->speaker()->exists())
| Speaker | [{{ $lead->speaker->first_name . ' ' . $lead->speaker->last_name }}]( {{ route('speakers.show', $lead->speaker->slug) }} ) |
@endif


  <br>
  <br>
  <br>
  <br>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
