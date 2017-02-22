const sidebar = document.querySelector('.sidebar')
let els

if (sidebar) {
  els = sidebar.querySelectorAll('.link')
  els.forEach(el => {
    console.log(el.href)
    if (el.href == location.href) {
      el.style.color = '#0275d8'
    }
  })
}
