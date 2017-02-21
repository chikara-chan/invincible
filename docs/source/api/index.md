---
title: Overview
layout: post
---

Invincible is a collection of miscellaneous functional JavaScript utility library. It is aim at helping developer to code easily and better.

## Install

``` bash
$ npm install --save invincible
# Or
$ yarn add invincible
```

## Usage

``` js
var invincible = require('invincible')
// Or
import invincible from 'invincible'
// Or
import {subModule, ...others} from 'invincible'
// Or
import subModule from 'invincible/lib/subModule'
```

## Third Support

Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) for loading modules on demand.

``` json
// .babelrc
{
  "plugins": [
    ["import", {
      "libraryName": "invincible",
      "camel2DashComponentName", false
    }]
  ]
}
```

``` js
import {subModule, ...others} from 'invincible'
```

## License

Released under the [MIT](https://github.com/chikara-chan/invincible/blob/dev/LICENSE) license.
