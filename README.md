# Lottie React

[![Build Status](https://circleci.com/gh/colmbrady/lottie-reactxp.svg?style=shield&circle-token=1ba254c5e6a14a24fb7d89baa497f50a2097a9b8f)](https://circleci.com/gh/colmbrady/lottie-reactxp/)

Exposes [Lottie](https://airbnb.design/lottie/) as a
[ReactXP](https://microsoft.github.io/reactxp/) extension.

Lottie is an iOS, Android, and React Native library that renders After Effects
animations in real time, allowing apps to use animations as easily as they use
static images. There is also a variant that works in a browser.

The reason for creating this etension is because the existing SVG ReactXP extension
provided by Microsft does not implement the complete set of SVG elements. Lottie avoids having to deal directly with SVG.

## Getting Started (Development)
Its a prequisite to set up [React Native](https://facebook.github.io/react-native/) if you intend on running the Lottie examples on IOS or Andoid. Install React Native CLI by following this [guide](https://facebook.github.io/react-native/doc/getting-started.html). Follow the "Building Projects from Native Code" tab.

For development, lets start by installing the NPM dependencies and peer dependencies.

```sh
npm run dev:setup # run from the checkout location
```

The example Lottie components can be viewed using a [Storybook](https://storybook.js.org/). Storybook is a demo playground for React components.

If using the bundled Storybook - the [Lottie RN Setup](http://airbnb.io/lottie/react-native/react-native.html) has already been done.

Finally, run the Storybook on either Web:

```sh
npm run storybook-web
```

and/or Native:

```sh
npm run storybook-native
npm run dev:ios
npm run dev:android
```

`npm run build` can be used to rebuild the source code.

## Getting Started (Usage)
Npm install module from GitHub:

```sh
npm i lottie-reactxp --save
```

Next follow the
[Lottie RN Setup](http://airbnb.io/lottie/react-native/react-native.html). Note, you can skip installing the `lottie-react-native` NPM module as it's a dependency of this module. You will still have to do the react native linking steps however.

You will also need to have your required peer dependencies. The recommended peer dependencies are:

- "react-native-windows": ">= 0.33.0"
- "react-native": ">= 0.51.0"
- "react-dom": ">= 16.0.0"
- "react": ">= 16.0.0"
- "reactxp": ">= 0.46.3"

You should be able to use in your code:

```javascript
import RX from 'reactxp';
import Lottie from 'lottie-reactxp';
import lottieData from './lottie-data.json';
...
render() {
    // state can be used to control the animation
    const { isStopped, duration } = this.state;
    return (
      <RX.View>
        <Lottie
          source={lottieData}
          isStopped={isStopped}
          height={400}
          width={400}
          duration={Number(duration)}
          onLoopComplete={() => { console.log('onLoopComplete'); }}
          onComplete={() => { console.log('onComplete'); }}
        />
      </RX.View>
    );
}
```

## Available props:

| Name           | Description                                                                                                                                                                    | Type   | Required | Default   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | -------- | --------- |
| source         | The Lottie data as a JSON file                                                                                                                                                 | object | Yes      | -         |
| loop           | Whether the animaiton will repeat indefinitly                                                                                                                                  | bool   | No       | true      |
| isStopped      | True will stop animation, false will continue animation.                                                                                                                       | bool   | No       | false     |
| duration       | Amount of seconds to run animation for. Setting the duration to the same amount as the Lottie animation length will result in a "speed" of 1 being set on the Lottie renderer. | number | No       | 1         |
| width          | Sets the px width of the container surrounding animation                                                                                                                       | number | No       | undefined |
| height         | Sets the px height of the container surrounding animation                                                                                                                      | number | No       | undefined |
| style          | passes style information down to the underlying Lottie control                                                                                                                 | object | No       | {}        |
| onComplete     | callback triggered when an animation has finished and loop is false.                                                                                                           | func   | No       | () => {}  |
| onLoopComplete | callback triggered when an animation has finished and loop is true.                                                                                                            | func   | No       | () => {}  |

## Found a bug?
Please raise an [issue](https://github.com/colmbrady/lottie-reactxp/issues) if you have problems.

## Contributing
Im open to contributions and improvements. Please raise an [issue](https://github.com/colmbrady/lottie-reactxp/issues) to discuss.
