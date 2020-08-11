# Array

## [drop](https://www.html.cn/doc/lodash/#_droparray-n1)

_.drop(array, [n=1])

>  创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

[filename](code/array/drop.js ':include :type=code :fragment=demo')

## take

_.take(array, [n=1])

> 创建一个数组切片，从array数组的起始元素开始提取n个元素。

```js
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```

## fromPairs

> _.fromPairs(pairs)

与[_.toPairs](https://www.html.cn/doc/lodash/#_topairsobject)正好相反；这个方法返回一个由键值对pairs构成的对象。

array -> pairs

```js
_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }
```
