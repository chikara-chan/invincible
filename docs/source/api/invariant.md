---
title: invariant
---

## Description

invariant is a function for throwing error message in development, but ignored in production.

## Syntax

> invincible.invariant(condition, message)

#### Arguments

Name | Type | Description
--- | --- | ---
condition | Boolean | Assert condition
message | String | The message to throw if condition is false

#### Returns

undefined

## Examples

``` js
invincible.invariant(0 != 0, 'throw this message')
invincible.invariant(0 == 0, 'not throw this message')
```
