# Friendemic Project

<img src="https://github.com/lvstross/friendemic-project/blob/master/public/img/text-image.png">

The project is a 5.6 Laravel install using React with Laravel Mix. The application is a text transformer where you can input one character
 in a string to be transformed into whatever you want it to be. Every occurrence of that character in the provided text will be transformed 
 and output on the screen. The application features one controller responsible for handling the request and a couple React components that make 
 up the form and output HTML.

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

Server up the application using artisan
```bash
~ php artisan serve
```


