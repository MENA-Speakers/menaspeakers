<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'MENA Speakers') }}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

  <meta name="dc.title" content="Mena Speakers - Leading Provider of Professional Speakers">
  <meta name="dc.description" content="Mena Speakers is a leading provider of professional speakers for corporate events, conferences, and other occasions. We offer a wide range of speakers, including business leaders, celebrities, and experts in a variety of fields.">
  <meta name="dc.subject" content="professional speakers, corporate events, conferences, speakers, business leaders, celebrities, experts, events, Dubai, United Arab Emirates">
  <meta name="dc.creator" content="Mena Speakers">
  <meta name="dc.publisher" content="Mena Speakers">
  <meta name="dc.date" content="2023-05-15">
  <meta name="dc.type" content="website">
  <meta name="dc.format" content="text/html">
  <meta name="dc.language" content="en-US">

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  @inertiaHead
</head>

<body class="font-poppins antialiased">
  @inertia
</body>

</html>
