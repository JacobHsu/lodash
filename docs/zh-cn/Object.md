# 对象 Object

pick <-> omit

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

omit
---

_.omit(object, [props])

> 反向版 _.pick; 这个方法一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（可以理解为删除object对象的属性）。

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

pick
---

_.pick(object, [props])

> 创建一个从 object 中选中的属性的对象。

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```
