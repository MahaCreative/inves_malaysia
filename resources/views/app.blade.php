<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    {{-- Default SEO metas (can be overridden by page via Inertia Head) --}}
    <meta name="description" content="{{ $page['props']['seo']['description'] ?? config('app.description', '') }}">
    <meta name="keywords" content="{{ $page['props']['seo']['keywords'] ?? '' }}">
    <link rel="canonical" href="{{ $page['props']['seo']['canonical'] ?? url()->current() }}">

    {{-- Open Graph / Facebook --}}
    <meta property="og:title" content="{{ $page['props']['seo']['title'] ?? config('app.name') }}" />
    <meta property="og:description" content="{{ $page['props']['seo']['description'] ?? config('app.description', '') }}" />
    <meta property="og:image" content="{{ $page['props']['seo']['image'] ?? asset('image/PT-DHERVA-INVESTINDO-14-1-20258.png') }}" />
    <meta property="og:type" content="{{ $page['props']['seo']['type'] ?? 'website' }}" />
    <meta property="og:url" content="{{ $page['props']['seo']['canonical'] ?? url()->current() }}" />

    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{{ $page['props']['seo']['title'] ?? config('app.name') }}" />
    <meta name="twitter:description" content="{{ $page['props']['seo']['description'] ?? config('app.description', '') }}" />
    <meta name="twitter:image" content="{{ $page['props']['seo']['image'] ?? asset('image/PT-DHERVA-INVESTINDO-14-1-20258.png') }}" />

    <link rel="icon" href="image/favicon.ico" sizes="any">

    <link rel="apple-touch-icon" href="image/apple-touch-icon.png">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,300,700&amp;subset=latin,latin-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Domine:400,700&amp;subset=latin-ext" rel="stylesheet">

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>