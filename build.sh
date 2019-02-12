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

# Build library
npm run ng build ${LIB} --prod

# Copy assets from library to dist
cp -r ${LIB_ASSETS_DIR} ${DIST_DIR}/.

# Copy assests from USWDS to dist
cp -r ${USWDS_ASSETS_DIR} ${DIST_DIR}/assets/.

# Create tarball of library
cd ${DIST_DIR}
npm pack
