let urlparams = {
  getItem(url, key) {
    let hrefs = url.split(/#/)
    let searchs = hrefs[0].split('?')
    if (searchs.length === 1) {
      return null
    }
    let tokens = searchs[1].split(/[?&]/i).filter(i => {
      if (i && i.split('=')[0] === key) {
        return true
      }
    })
    let token = tokens[0]
    return token ? token.split('=')[1] || '' : null
  },
  setItem(url, key, value) {
    let hrefs = url.split(/#/)
    let searchs = hrefs[0].split('?')
    if (searchs.length === 1) {
      return `${hrefs[0]}?${key}=${value}#${hrefs[1] || ''}`
    }
    if (urlparams.getItem(key)) {
      let tokens = searchs[1].split(/[?&]/i).filter(i => i).map(item => {
        let dict = item.split('=')
        if (key === dict[0]) {
          dict[1] = value
        }
        return `${dict[0]}=${dict[1] || ''}`
      })
      return `${searchs[0]}?${tokens.join('&')}#${hrefs[1] || ''}`
    } else {
      return `${searchs[0]}?${searchs[1]}&${key}=${value}#${hrefs[1] || ''}`
    }
  },
  removeItem(url, key) {
    let hrefs = url.split(/#/)
    let searchs = hrefs[0].split('?')
    if (searchs.length === 1) {
      return url
    }
    let tokens = searchs[1].split(/[?&]/i).filter(i => i).map(item => {
      let dict = item.split('=')
      if (key === dict[0]) {
        return ''
      }
      return `${dict[0]}=${dict[1] || ''}`
    }).filter(i => i)
    return `${searchs[0]}?${tokens.join('&')}#${hrefs[1] || ''}`
  }
}

export default urlparams
