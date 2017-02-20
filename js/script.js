var links, i,
  rHost = /github\.io/,
  map = Array.prototype.map

if (location.hostname.match(rHost)) {
  links = document.querySelectorAll('a')

  for (i in links) {
    if (links[i].href) {
      links[i].href = links[i].href.replace(rHost, '$&/invincible')
    }
  }
}
