var links = ['github.io/invincible/s', 'javascrpt:void']
links = links.map(function(link) {
    return link.replace(/github\.io/, '$&/invincible')
  })

  console.log(links)
