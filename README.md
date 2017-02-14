# Invincible

A series of miscellaneous functional JavaScript utility library.

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
