# github-statistics-app

This project get statistics from gitHub by repository name

## Getting Started

To get you started you can simply clone the github-statistics-app repository and install the dependencies:

### Clone github-statistics-app

Clone the github-statistics-app repository using [git][git]:

```
git clone https://github.com/angular/github-statistics-app.git
cd github-statistics-app
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
gulp default
```

The gulp automatically open default browser on your computer  with `http://localhost:8000/#/`.


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and end-to-end tests.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```
