#!/bin/bash

# Build the team report CSV
cseds --team --dest=./public/data

# Fire up the site
npm run dev

# Note the time so we can show this in the app
# @TODO write this to a json file maybe?