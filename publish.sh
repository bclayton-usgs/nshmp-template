#!/bin/bash

# Run build script
npm run build

# Lib dir
cd dist/nshmp-ng-template

# Publish to npm
npm publish --access public
