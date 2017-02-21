---
title: formatDate
layout: post
---

## Description

formatDate is a function to format Date from timestamp to date string.

## Syntax

> invincible.formatDate(timestamp, format)

#### Params

Name | Type | Default | Description
--- | --- | --- | ---
timestamp | Number | | A number of timestamp
format | String | 'YYYY-MM-DD hh:mm:ss' | The format string

#### Return

Type | Description
--- | ---
String | Return the result of format

## Examples

``` js
invincible.formatDate(1483229430000) // '2017-01-01 08:10:30'
invincible.formatDate(1483229430000, 'YYYY-MM-DD') // '2017-01-01'
```
