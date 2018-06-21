<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Text Transformer</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}?v=1" rel="stylesheet">
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="text-center">Text Transformer</h1>
        </div>
        <div id="root"></div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}?v=1"></script>
    <noscript>This application requires Javascript to be enabled. Please enable javascript to use this application.</noscript>
    </body>
</html>
