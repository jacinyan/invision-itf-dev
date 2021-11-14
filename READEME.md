# Invision Interface Development

## Features

A enterprise webpage comprised of two components to demonstrate the design of responsive layout and user interface

- HTML, CSS (Grid based), Less preprocessor
- UI lib: Lightbox2, normalize.css
- Bundler: Webpack
- Version control: Git and Github
- Wireframe: Figma (https://www.figma.com/file/dGDWZ71Jq1RVtbey1ssVwB/invision-itf-dev?node-id=0%3A1)

## Project Structure

Only `src/` will be elaborated below.

```
# Trivial folders/files had been omitted
src
├── assets
│   ├── fonts
│   │   ├── OpenSans-Bold.ttf
│   │   ├── OpenSans-BoldItalic.ttf
│   │   ├── OpenSans-ExtraBold.ttf
│   │   ├── OpenSans-ExtraBoldItalic.ttf
│   │   ├── OpenSans-Italic.ttf
│   │   ├── OpenSans-Light.ttf
│   │   ├── OpenSans-LightItalic.ttf
│   │   ├── OpenSans-Medium.ttf
│   │   ├── OpenSans-MediumItalic.ttf
│   │   ├── OpenSans-Regular.ttf
│   │   ├── OpenSans-SemiBold.ttf
│   │   └── OpenSans-SemiBoldItalic.ttf
│   └── images
│       ├── info
│       │   ├── info-image-01.jpg
│       │   ├── info-image-01@2x.jpg
│       │   ├── info-image-02.jpg
│       │   ├── info-image-02@2x.jpg
│       │   ├── info-image-03.jpg
│       │   └── info-image-03@2x.jpg
│       └── latest
│           ├── latest-image-01.jpg
│           ├── latest-image-01@2x.jpg
│           ├── latest-image-02.jpg
│           ├── latest-image-02@2x.jpg
│           ├── latest-image-03.jpg
│           └── latest-image-03@2x.jpg
├── data
│   └── components
│       ├── info.js
│       └── latest.js
├── main.js
├── scripts
│   ├── components
│   │   ├── info.js
│   │   └── latest.js
│   ├── index.js
│   └── lib
│       └── lightbox2.js
├── styles
│   ├── common
│   │   └── index.less
│   ├── components
│   │   ├── info.less
│   │   └── latest.less
│   ├── index.less
│   └── lib
│       ├── lightbox.css
│       └── normalize.css
└── utils
    └── index.js
```

## Quick Start

```sh
$ git clone https://github.com/jacinyan/invision-itf-dev.git
$ cd invision-itf-dev/

# Install dependencies
$ yarn install or npm install

# Run!
$ yarn start
```

The browser will be automatically opened after the server has been started, and the port is default to 9000. To configure the settings, you may reference https://webpack.js.org/configuration/dev-server/ for more detail

## TODO

- Deployment
- Minor layout fixes in the latest section
- Code splitting for production and development environments with webpack
