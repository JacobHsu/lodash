# 集合 Collection

## [find](https://www.html.cn/doc/lodash/#_findcollection-predicate_identity-fromindex0)

_.find(collection, [predicate=_.identity], [fromIndex=0])
> 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。

```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
```

## map

> _.map(collection, [iteratee=_.identity])

创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：(value, index|key, collection).

```js
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
```

```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
```

```js
function createType(type) {
  return {
    base: `${type}`,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`
  }
}
_.map(['TEST','TYPE'], value => [value, createType(value)])
// Array (2 items)
// 0: ["TEST", Object {base: "TEST", failure: "TEST_FAILURE", success: "TEST_SUCCESS"}]
// 1: ["TYPE", Object {base: "TYPE", failure: "TYPE_FAILURE", success: "TYPE_SUCCESS"}]

_.fromPairs([
   ["TEST", {base: "TEST", failure: "TEST_FAILURE", success: "TEST_SUCCESS"}],
   ["TYPE", {base: "TYPE", failure: "TYPE_FAILURE", success: "TYPE_SUCCESS"}]
]);
// => Object
// TEST: Object {base: "TEST", failure: "TEST_FAILURE", success: "TEST_SUCCESS"}
// TYPE: Object {base: "TYPE", failure: "TYPE_FAILURE", success: "TYPE_SUCCESS"}
```

## orderBy

> _.orderBy(collection, [iteratees=[_.identity]], [orders])

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

```js
import { orderBy } from 'lodash'
private async getList() {
  const { data } = await getListData()
  this.list = orderBy(data, ['sort'], ['asc'])
}
```
