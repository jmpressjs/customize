#!/bin/bash
git checkout gh-pages
git merge master
rm -rf public
node _template/publish
git add index.html public
git add index.html public -u
git commit -m "Publish"
git checkout master
