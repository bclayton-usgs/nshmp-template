#!/bin/bash

# Immediately exit if script fails
set -e

# Library name to build
LIB=nshmp-ng-template

# Library assets directory
LIB_ASSETS_DIR=projects/${LIB}/src/assets

# US wed design system assets directoy
USWDS_ASSETS_DIR=node_modules/uswds/dist/img

# Distribution directory
DIST_DIR=dist/${LIB}

# SCSS directory
SCSS_DIR=projects/${LIB}/src/scss

# Build library
npm run ng build ${LIB} --prod

# Copy assets from library to dist
cp -r ${LIB_ASSETS_DIR} ${DIST_DIR}/.

# Copy SCSS from src to dist
cp -r ${SCSS_DIR} ${DIST_DIR}/.

# Create tarball of library
cd ${DIST_DIR}
npm pack
