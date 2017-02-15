# Invincible

A series of miscellaneous functional JavaScript utility library.

[![Travis branch](https://img.shields.io/travis/chikara-chan/invincible/master.svg)](https://travis-ci.org/chikara-chan/invincible)
[![Coveralls branch](https://img.shields.io/coveralls/chikara-chan/invincible/master.svg)](https://coveralls.io/github/chikara-chan/invincible)
[![npm](https://img.shields.io/npm/v/invincible.svg)](https://www.npmjs.com/package/invincible)
[![npm](https://img.shields.io/npm/l/invincible.svg)](https://github.com/chikara-chan/invincible/blob/master/LICENSE)

## Install

```sh
$ npm install --save invincible
```

## Usage

```js
import invincible from 'invincible'
```

## API

#### invariant

```js
invincible.invariant(false, 'something wrong') // Throw new Error('something wrong')
invincible.invariant(true, 'something wrong')  // Noop
```

## License

[MIT](https://github.com/chikara-chan/invincible/blob/master/LICENSE)
