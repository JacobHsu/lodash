## innerJoin

```
import { innerJoin } from 'ramda'

innerJoin(
  (record, id) => record.id === id,
  [{id: 824, name: 'Richie Furay'},
   {id: 956, name: 'Dewey Martin'},
   {id: 313, name: 'Bruce Palmer'},
   {id: 456, name: 'Stephen Stills'},
   {id: 177, name: 'Neil Young'}],
  [177, 456, 999]
);
//=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
```
