---
title: getURLParams
layout: post
---

## Description

getURLParams is a function to get URL object from location.href in browser.

## Syntax

> invincible.getURLParams()

#### Params

undefined

#### Return

Type | Description
--- | ---
Object | Return URL params object

## Examples

``` js
// http://www.google.com/?a=1&b=2&c=3

invincible.getURLParams() // {a: '1', b: '2', c: '3'}
```
