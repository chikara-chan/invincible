var els = document.querySelector('.sidebar').querySelectorAll('.link')

els.forEach(function(el) {
  console.log(el.href)
  if (el.href == location.href) {
    el.style.color = '#0275d8'
  }
})
