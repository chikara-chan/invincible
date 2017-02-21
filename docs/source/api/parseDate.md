---
title: parseDate
layout: post
---

## Description

parseDate is a function to parse Date object conveniently and compatible width old browser.

## Syntax

> invincible.parseDate(dateStr)

#### Params

Name | Type | Default | Description
--- | --- | --- | ---
dateStr | String | | The string value of date

#### Return

Type | Description
--- | ---
Number | Return timestamp

## Examples

``` js
invincible.parseDate('2017-01-01 08:10:30') // 1483229430000
invincible.parseDate('2017-01-01') // 1483200000000
```
