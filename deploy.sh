#!/bin/bash

echo "--> building the app"
grunt build

echo "--> commiting the dist"
git add dist
git commit -m "new dist"

echo "--> pushing to gh-pages"
git subtree push --prefix dist origin gh-pages
