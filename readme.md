# Friendemic Project

The project is a 5.6 Laravel install using React with Laravel Mix. The application is a text transformer where you can input one character in a string
to be transformed into whatever you want it to be. Every occurence of that character in the provided text will be tranformed and output on the screen.
The application features one controller responsible for handleing the request and a couple React components that make up the form and output HTML.

## Set Up Instructions

Run composer and npm and compile the assets.

```bash
~ composer install
~ npm install
~ npm run dev
```

Change the .env.example file to a .env files. The only configuration needed is the application key. Generate this key with

```bash
~ php artisan key:generate
```

Server up the application

```bash
~ php artisan server
```


