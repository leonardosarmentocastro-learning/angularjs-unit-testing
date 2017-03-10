1. install karma
> npm install -g karma
> npm install karma --save-dev
> npm install -g karma-cli

2. configure karma
karma init karma.conf.js

```
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
>

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> client/app/modules/**/*.js
> tests/**/*.test.js
10 03 2017 16:17:25.369:WARN [init]: There is no file matching this pattern.

> tests/**/*.test.js
>

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> no


Config file generated at "/home/lscastro/workspace/leonardosarmentocastro/angularjs-unit-testing/karma.conf.js".
```

3. Install `karma-wiredep` to automatically include all your vendor files into `karma.conf.js`:
```
npm install karma-wiredep --save-dev
```

> Add this piece of wiredep code configuration into your `karma.conf.js`:
```
module.exports = function(config) {
    config.set({
        frameworks: ['wiredep', 'jasmine'],

        //you can configure wiredep from here (optional)
        wiredep: {
            dependencies: true,    // default: true  
            devDependencies: true, // default: false  
            exclude: [ /jquery/, 'bower_components/modernizr/modernizr.js' ],
            overrides: { ... }
        },

        plugins : [ 'karma-wiredep' ]
    });
};
```

Add some other `karma` unmet dependencies:
> REFERENCE (of problem solving):
> 1.1 http://stackoverflow.com/a/22392569
> 1.2 https://www.npmjs.com/package/karma-jasmine
```
npm install karma-jasmine --save-dev # 1.1
npm install jasmine-core --save-dev # 1.2
```

As we added the `wiredep` plugin to karma and it specifies the `plugin` attribute, we must add some extra
values to it.

> Change your `karma.conf.js` attribute `plugins` values:
> REFERENCE:
> http://stackoverflow.com/a/32494530
From:
```
  plugins : [ 'karma-wiredep' ]
```
To:
```
plugins : [
  'karma-wiredep',
  'karma-jasmine',
  'karma-chrome-launcher'
]
```


4. Add `jasmine` to your project:
```
npm install --g jasmine
npm install --save-dev jasmine
```

> Initialize it on your project:
```
jasmine init
```

5. Finally, run `karma` to see it working:
```
karma start
```

-----

1. Add `angular-mocks` to your `bower.json` file:

```
bower install --save angular-mocks
```

-----
# Writing your first test

1. First, lets tell `jasmine` where our tests are by changing the `spec/support/jasmine.json` file content:

From:
```
{
  "spec_dir": "tests",
  "spec_files": [
    "**/*test.js"
  ],
  ...
```

To:
```
{
  "spec_dir": "tests",
  "spec_files": [
    "**/*test.js"
  ],
  ...
}
```

-----

# Resource

http://angulartestingquickstart.com/
