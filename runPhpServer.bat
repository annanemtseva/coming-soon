copy /Y .\src\mail.php .\dist\mail.php
copy /Y .\src\php.ini .\dist\php.ini
php -S localhost:8080 -t dist/ -c dist/php.ini