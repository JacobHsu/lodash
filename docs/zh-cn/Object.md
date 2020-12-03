# 对象 Object

findKey
---

_.findKey(object, [predicate=_.identity])

这个方法类似 _.find。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。

```js
import { findKey } from 'lodash'

const view = TagsViewModule.visitedViews
const key = findKey(view, { name: 'password' })
TagsViewModule.delView(view[Number(key)])
```

get
---

_.get(object, path, [defaultValue])

> 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```
