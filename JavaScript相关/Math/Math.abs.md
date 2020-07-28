# Math.abs

Math.abs(x) 函数返回指定数字 “x“ 的绝对值。

几个常见的Math.abs使用场景和预期的值如下
```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs("string"); // NaN
Math.abs();         // NaN
```

ps Number里面有一个特殊的静态值Number.EPSILON 它表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值。

我们都知道JavaScript里面的数字其实都是双精度浮点数，所以这个值可以用来和JavaScript里面的不精确运算配合使用，诸如经典的

0.1 + 0.2 != 0.3 想要得到预期的值，我们可以使用

0.1 + 0.2 - 0.3 <= Number.EPSILON 是否为true来得出相应的浮点运算结果了