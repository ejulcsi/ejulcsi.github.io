const links = document.querySelectorAll('nav a')

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const section = document.getElementById(id)

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
  })
})

window.addEventListener('scroll', () => {
  links.forEach(i => {
    const id = i.getAttribute('href').slice(1)
    const section = document.getElementById(id)

    if (window.pageYOffset >= section.offsetTop - (section.offsetHeight/2) && window.pageYOffset < section.offsetTop + (section.offsetHeight/2)) {
      i.classList.add('active')
    } else {
      i.classList.remove('active')
    }
  })
})
