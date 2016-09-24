#! /bin/sh
# initdb.sh
#
# Reset the BabyID mongo development database back to init.
# Deletes the entire contents of the db directory, if one exists.
# Then, initializes a new database with default admin credentials.

rm -rf db/*
mongod --dbpath db &
mongo babyid --eval "db.users.insert({username: 'admin', password: 'admin', admin: true});"
