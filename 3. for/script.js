for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log('It is 3');
    continue;
  }
  if (i === 5) {
    console.log('5 Stop the loop');
    break;
  }
  console.log('Number'+1);
}

const user = {
  name: 'Han',
  province : 'gyenggido',
  city : '성남시'
}
for (let x in user) {
  console.log(x,user[x]);  
}

let i = 0;
while (i<10){
  console.log('Number'+i);
  i++;
}

let j = 100;
do {
  console.log('Number'+j);
  j++;
}
while(j<110);

const locations = ['서울','부산','경기도','대구'];
//for
for (let k = 0; k < locations.length; k++) {
  console.log(locations[k]);
}

//forEach
locations.forEach(function (location, index, array) {
  console.log(index,location);
  console.log(array);
});
//map
locations.map(function(location){
  console.log(location);
})


