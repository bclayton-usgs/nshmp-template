#!/bin/bash

# Run build script
npm run build

# Bump version
cd projects/nshmp-ng-template
npm version patch

# Lib dir
cd ../../dist/nshmp-ng-template

# Publish to npm
npm publish --access public
