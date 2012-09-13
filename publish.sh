#!/bin/bash
git checkout gh-pages
git merge master
rm -rf assets
node _template/publish
git add index.html assets -u
git commit -m "Publish"
git checkout master
