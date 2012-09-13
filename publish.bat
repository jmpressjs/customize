@echo off
git checkout gh-pages
git merge master
rmdir /Q /S assets
node _template\publish
git add index.html assets -u
git commit -m "Publish"
git checkout master
