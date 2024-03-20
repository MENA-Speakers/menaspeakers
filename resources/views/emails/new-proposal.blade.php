<x-mail::message>
# Proposal template for {{ $proposal->title }} is created


Click the link below to add rate cards to the proposal.

{{--<x-mail::button :url="{{ route('admin.proposals.show', $proposal->id)}}">--}}
{{--View Proposal--}}
{{--</x-mail::button>--}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
