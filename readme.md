<h1 align="center">Laravel / React</h1>

## Set Up Instructions

Run composer and npm and compile the assets.
```bash
~ composer install
~ npm install
~ npm run dev
```

Rename the .env.example file to .env and generate the application key
```bash
~ mv .env.example .env
~ php artisan key:generate
```

Serve up the application using artisan
```bash
~ php artisan serve
```

When editing the react files
```bash
~ npm run dev // single compile
~ npm run watch // watches files
```

When pushing to production
```bash
~ npm run prod
```

