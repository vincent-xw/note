```
实现一个格式化方法，可以将以下的结构格式化输出，要求按照id进行顺序排序
col1|col1index|col2|col2index
通讯|2000|微信|100
通讯|2000|qq|200
娱乐|1000|抖音|100
娱乐|1000|微视|200

{
  label: '通讯',
  value: 1000,
  children: [
    {
      label: '微信',
      value: 100
    },
    {
      label: 'qq',
      value: 200
    }
  ]
},
{
  label: '娱乐',
  value: 2000,
  children: [
    {
      label: '抖音',
      value: 100
    },
    {
      label: '微视',
      value: 200
    }
  ]
}
```