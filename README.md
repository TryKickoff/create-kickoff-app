# Create Kickoff App

Create Kickoff apps with no build configuration.

This is a custom fork of [Create React App](https://github.com/facebookincubator/create-react-app).

It's customized to a Kickoff-centric workflow, and includes the following changes in addition to supporting everything the original project supports:

* SASS pre-processing
* The [Kickoff](http://github.com/trykickoff/kickoff) front-end framework
* A customized project template (e.g. split into /components and /container directories)
* An escape hatch to leave JavaScript unminified

In some cases, these features were submitted to the original project as a pull request but rejected.

## Getting Started

One-liner install and scaffold using Yarn:

```sh
yarn create kickoff-app my-app

cd my-app/
yarn start
```

or the equivalent using NPM:

```sh
npm install -g create-kickoff-app

create-kickoff-app my-app
cd my-app/
npm start
```

Everything that works for a project scaffolded by Create React App project will continue to work for a Create Kickoff Project.

(e.g. [deploying to Heroku](https://github.com/mars/create-react-app-buildpack))

## Disabling JavaScript Minification

Sometimes, clients will request un-minified JavaScript (presumably for security reasons). Create Kickoff App has been customised to support this out of the box.

By default, JavaScript will be minified as normal.

To stop this, run the following commands:

```sh
cd my-app/
echo 'MINIFY_JS=false' >> .env
```

This creates a `.env` file in your project root. It will be automatically loaded, and Create Kickoff App knows to check that `MINIFY_JS` variable and switch minification off accordingly.

This change was rejected from the original project -- and probably rightly so. It's a weird edge case we *had* to support.

## Contributing

Don't contribute to this repository. Seriously -- this is not intended to be "maintained" in that sense.

Instead, you need to contribute to [the original project](http://github.com/facebookincubator/create-react-app).

## Acknowledgements

This is Facebook's project, not ours.

The one and only reason this fork exists is ease of use and because I didn't want `ejecting` to be the first thing I did every time I started a new project.

## FAQ

- Couldn't I just `eject` a Create React App project and then put these customisations on top of the ejected code?
  - Yes. Yes you could. Call me lazy.

- Or why not just specify a custom fork of React Scripts on the command line?
  - Because then anyone using this in their Terminal needs to remember the `--custom-scripts` flag every time.

  - My team was reluctant enough to adopt this as it was. I decided calling the whole thing "Create Kickoff App" would be easier for them.
