function fromatter(str) {
	if (!str) {
		return;
	}
	str = str.split('\n').map(x=> x.split('|'));
	// str.shift();
	str.sort((a,b)=>a[1]-b[1]);
  let temp = {};
  str.map(item => {
    if (temp[item[0]]) {
      temp[item[0]].label = item[0];
      temp[item[0]].value = item[1];
      temp[item[0]].children.push({
        label: item[2],
        value: item[3]
      })
    }
    else {
      temp[item[0]] = {
        label: item[0],
        value: item[1], 
        children: [{
          label: item[2],
          value: item[3]
        }]
      }
    }
    
    
  })
  let result = [];
  for (const item in temp) {
    result.push(temp[item])
  }
  console.log(result);
  
}
var str = `
col1|col1index|col2|col2index
通讯|2000|微信|100
通讯|2000|qq|200
娱乐|1000|抖音|100
娱乐|1000|微视|200
`
fromatter(str);

// var O = [
//   {
//     label: '通讯',
//     value: 1000,
//     children: [
//       {
//         label: '微信',
//         value: 100
//       },
//       {
//         label: 'qq',
//         value: 200
//       }
//     ]
//   },
//   {
//     label: '娱乐',
//     value: 2000,
//     children: [
//       {
//         label: '抖音',
//         value: 100
//       },
//       {
//         label: '微视',
//         value: 200
//       }
//     ]
//   }
// ]