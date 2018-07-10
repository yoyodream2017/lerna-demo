You can `require` external files in your examples:

```jsx
const names = [require('faker').name.firstName()]
;<RandomButton variants={names} />
```
