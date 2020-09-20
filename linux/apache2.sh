#!/bin/bash

mkdir /home/$USER/public_html
currUSER=$USER
sudo ln -s /home/$currUSER/public_html /var/www/html
