@component('mail::message')
# {{ $content['title'] }}

{{ $content['body'] }}

@component('mail::button', ['url' => $content['url']])
{{ $content['buttonText'] }}
@endcomponent

Thanks,
{{ config('app.name') }}
@endcomponent
