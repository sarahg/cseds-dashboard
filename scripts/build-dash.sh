#!/bin/bash

# Build the team report CSV
cseds --team

# Move it over here
mv ~/projects/cseds-cli/tmp/team-report.csv ~/projects/cseds-dashboard/public/data/