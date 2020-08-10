### Instructions:
Clone project
>git clone https://github.com/ArtursAsi/currencies-laravel-angular.git

#### Server

Go into server directory
>cd server

Install all dependencies
>composer install

>npm install

Create .env file
>cp .env.example .env

Create Database 

Migrate Database
>php artisan migrate

Update Database
>php artisan update:currencies

Generate key
>php artisan key:generate

Run app 
>php artisan serve

#### Client
Go into client directory
>cd client

Install all dependencies
>npm install

Run app 
>ng serve

>Open http://localhost:4200/

### Description

This app reads an RSS file to view currency rates from Europe`s Central Bank.
You can click on currency name to view all days about that currencies rate.


