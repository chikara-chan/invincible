---
title: assert
layout: post
---

## Description

assert is a function to throw error message by assertion based on facebook fbjs.

## Syntax

> invincible.assert(condition, message)

#### Params

Name | Type | Required | Default | Description
--- | --- | --- | --- | ---
condition | Boolean | true | | Assert condition
message | String | true | | The message to throw if condition is false

#### Return

undefined

## Examples

``` js
invincible.assert(0 != 0, 'throw this message')
invincible.assert(0 == 0, 'not throw this message')
```
