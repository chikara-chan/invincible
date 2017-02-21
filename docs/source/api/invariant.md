---
title: invariant
layout: post
---

## Description

invariant is a function to throw error message by assertion.

## Syntax

> invincible.invariant(condition, message)

#### Params

Name | Type | Description
--- | --- | ---
condition | Boolean | Assert condition
message | String | The message to throw if condition is false

#### Return

undefined

## Examples

``` js
invincible.invariant(0 != 0, 'throw this message')
invincible.invariant(0 == 0, 'not throw this message')
```
