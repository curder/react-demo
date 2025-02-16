# classnames 扩展库

## 安装

```bash
yarn add classnames -D
```

## 使用

```js
import classNames from 'classnames';

// 对象语法
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', {bar: true,baz: false,}); // => 'foo bar'
classNames('foo', {bar: true,}, 'baz'); // => 'foo bar baz'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames({ foo: false, bar: true }); // => 'bar'
classNames({ foo: undefined, bar: true }); // => 'bar'
classNames({ foo: null, bar: true }); // => 'bar'
classNames({ foo: 0, bar: true }); // => 'bar'
classNames({ foo: '', bar: true }); // => 'bar'
classNames({ foo: NaN, bar: true }); // => 'bar'
classNames({ foo: '0', bar: true }); // => 'foo bar'

// 数组语法
classNames(['foo', 'bar']); // => 'foo bar'
classNames(['foo', { bar: true }]); // => 'foo bar'
classNames(['foo', { bar: true, baz: false }]); // => 'foo bar'
```