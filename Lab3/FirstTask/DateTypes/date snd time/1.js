let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

// current date
let date1 = new Date();

// the hour in your current time zone
alert( date1.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date1.getUTCHours() );

function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'Total time for diffSubtract: ' + time1 );
  alert( 'Total time for diffGetTime: ' + time2 );