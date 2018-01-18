# Lottie React

Exposes [Lottie](https://airbnb.design/lottie/) as a
ReactXP extension.

Lottie is an iOS, Android, and React Native library that renders After Effects
animations in real time, allowing apps to use animations as easily as they use
static images. There is also a variant that works in a browser.

The reason for creating this etension is because the existing SVG ReactXP extension
provided by Microsft does not implement the complete set of SVG elements. Lottie avoids having to deal directly with SVG.

## Getting Started (Development)

Lets start by installing the NPM dependencies and peer dependencies.

```sh
npm run dev:setup 
```

Next follow the
[Lottie RN Setup](http://airbnb.io/lottie/react-native/react-native.html).

Finally, run the story book on either Web:

```sh
npm run starybook-web
```

and/or Native:

```sh
npm run starybook-native
npm run dev:ios
npm run dev:android
```

## Getting Started (Usage)

Npm install module from GitHub:

```sh
npm i npm install https://github.com/colmbrady/lottie-reactxp/tarball/v1.0.0 --save
```

Use in your code:

```javascript
import Lottie from 'lottie-reactxp';
import lottieData from './lottie-data.json';
...
render() {
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