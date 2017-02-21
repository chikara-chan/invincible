---
title: isPlainObject
layout: post
---

## Description

isPlainObject is a function to check wether a val is a plain object.

## Syntax

> invincible.isPlainObject(val)

#### Params

Name | Type | Default | Description
--- | --- | --- | ---
val | Any | | The source value to check

#### Return

Type | Description
--- | ---
Boolean | Wether the value is a plain object

## Examples

``` js
invincible.isPlainObject({key: 'value'}) // true
invincible.isPlainObject([1, 2, 3]) // false
invincible.isPlainObject(new Test()) // false
```
