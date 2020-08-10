# 字符串 String

## [camelCase](https://www.html.cn/doc/lodash/#_camelcasestring)

_.camelCase([string=''])

> 转换字符串string为 [驼峰写法](https://en.wikipedia.org/wiki/CamelCase)。

```js
_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'
```

```js
import camelCase from 'lodash/camelCase'

function createType(type) {
  return {
    processing: camelCase(`${type}Processing`),
    error: camelCase(`${type}Error`)
  }
}
```
