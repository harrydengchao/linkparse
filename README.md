# linkparse
linkparse

---

## Install

```bash
$ npm install --save linkparse
```

## Usage

```javascript
import linkparse from 'linkparse'

// location.href
// https://www.baidu.com/s?wd=name&rsv_spt=1&rsv_iqid=0xf1866a79000470c3

// get url search item
let wd = linkparse.getItem(window.location.href, 'wd')
// output: "name"

// set url search item
let newUrl = linkparse.setItem(window.location.href, 'age', '23')
// output: "https://www.baidu.com/s?wd=name&rsv_spt=1&rsv_iqid=0xf1866a79000470c3&age=23#"

// remove url search item
let newUrl_1 = linkparse.removeItem(window.location.href, 'rsv_spt')
// output: "https://www.baidu.com/s?wd=name&rsv_iqid=0xf1866a79000470c3#"
```

