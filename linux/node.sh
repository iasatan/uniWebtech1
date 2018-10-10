#/bin/bash

github=$1
repo=$2
#echo $github
cd /tmp/
git clone https://github.com/$github/$repo
git clone https://github.com/iasatan/uniWebtech1
cd uniWebtech1
cd nodeserverExample
npm install
ln -s /tmp/$repo student
