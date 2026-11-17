(() => {
  // Member profile URLs have a single path segment.
  if (!/^\/[^/]+\/?$/.test(location.pathname)) return

  const statistic = document.querySelector(
    '#content .profile-stats.js-profile-stats > h4:nth-child(2) > a'
  )
  const count = statistic?.querySelector('span.value')
  const label = statistic?.querySelector('span.definition.title-all-caps.-small')

  if (!count) return

  const originalCount = count.textContent.trim()
  if (!/^\d[\d\s,.]*$/.test(originalCount)) return
  const films = Number(originalCount.replace(/\D/g, ''))
  const originalLabel = label?.textContent.trim()

  const update = () => {
    const today = new Date()
    const year = today.getFullYear()
    const day = Math.floor(
      (Date.UTC(year, today.getMonth(), today.getDate()) -
        Date.UTC(year, 0, 1)) / 86_400_000
    ) + 1

    count.textContent = `${originalCount} / ${day}`
    if (originalLabel) {
      const difference = films - day
      label.textContent = `${originalLabel} (${difference > 0 ? '+' : ''}${difference})`
    }
  }

  update()
  window.setInterval(update, 60_000)
  document.addEventListener('visibilitychange', update)
})()
