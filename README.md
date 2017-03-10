# Node.js Client Quickstart

Install project dependencies
```shell-script
npm install
bower install
```

Run it with
```shell-script
npm start
```

# TODO
1. **Gulp tasks** with:

    1.1. Environment variables for port

    1.2. Production ready task (minification, uglify, etc..)
2. 404 page for routes that are not mapped by express.js (e.g `localhost:8080/foo`)
3. Angular.js tests for controllers, services, etc..
4. Functional tests with `intern.js`, `protactor`.. ?
5. Include bootstrap and write a sample on 'home.view.html'

# When using this project as a barebones
```shell-script
# Define your repository variables (those values below are example only)
YOUR_REPOSITORY_NAME="your_repository_name"
YOUR_REPOSITORY_ADDRESS="git@github.com:your_github_user/your_repository_name.git"

# Clone the quickstart using your repository name
git clone git@github.com:leonardosarmentocastro/nodejs-client-quickstart.git $YOUR_REPOSITORY_NAME
cd $YOUR_REPOSITORY_NAME
rm -rf .git

# Initialize your repository and push to your origin
git init
git add .
git commit -m "Repo init"

git remote add origin $YOUR_REPOSITORY_ADDRESS
git push -u origin master
```

# DONE

# Project issues explained
### 1) "bootstrap" and "wiredep"
The included code on `bower.json`:
```json
"overrides": {
  "bootstrap": {
    "main": [
      "dist/js/bootstrap.js",
      "dist/css/bootstrap.css",
      "less/bootstrap.less"
    ]
  }
}
```

Server as a workaround for wiredep for not injecting the bootstrap dependencies.
> Reference: https://github.com/yeoman/generator-angular/issues/1116#issuecomment-154395390
