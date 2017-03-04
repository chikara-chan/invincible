---
title: accessCookie
layout: post
---

## Description

accessCookie is a function to get, set and remove cookie.

## Syntax

> invincible.accessCookie(key, val, opts)

#### Params

Name | Type | Required | Default | Description
--- | --- | --- | --- | ---
key | String | true | | The name of cookie
val | String | | | The value of cookie
opts | Object | | | The extra options of cookie

`opts`

Name | Type | Required | Default | Description
--- | --- | --- | --- | ---
expires | String |  | 365 | A string representing the expires days of the cookie.
path | String |  | | A string representing the path of the cookie.
domain | Object |  | | A string representing the domain the cookie belongs to.
secure | Boolean |  | | A boolean, true if the cookie is marked as secure, or false otherwise.

#### Return

Type | Description
--- | ---
String | Return value of cookie

## Examples

``` js
invincible.accessCookie('username', 'James') // set 'James'
invincible.accessCookie('username') // get 'James'
invincible.accessCookie('username', null) // delete 'James'
```
