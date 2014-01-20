# customize

Create your own version of jmpress.js.

### Setup

``` javascript
npm install
npm install webpack webpack-dev-server -g
```

### Development

Start the development server with:

``` javascript
webpack-dev-server --colors --progress --devtool eval
```

Then open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) in your browser.

### Publish

Commit all changes.

``` text
git checkout gh-pages
git merge master
rm -rf assets
git rm assets -r
webpack --optimize-minimize --progress --colors
git add assets
git commit -m "Publish"
git checkout master
```

Finally `git push` the both branches.