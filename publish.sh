#!/bin/bash

# Run build script
npm run build

# Bump version
npm version patch

# Push tags
git push
git push --tags

# Lib dir
cd dist/nshmp-ng-template

# Publish to npm
npm publish --access public
