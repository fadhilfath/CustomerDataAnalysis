function analyze(){

  //
  // Getting To Know the Data
  //

  heading('Examples')

  ask('how many measurements were included in this dataset?', example1)

  ask('how many samples does each measurement contain?', example2)

  ask('at the 10-th measurement, what are valid sample values (> 0)?', example3)
  // a sample value is valid if it is greater than zero

  heading('Measurements and Samples')

  ask('how many unique non-zero, non-negative sample values in this dataset? what are they?', func1)

  ask('what is the average time (seconds) between two measurements?', func2)

  ask('at 09:57:18, how many samples in this measurement have the value 7?', func3)

  ask('which measurement has the most number of samples with the value 3?', func4)

  ask('how many measurements have no sample value greater than zero?', func5)

  ask('which valid (i.e., greater than zero) sample value is the most common?', func6)

  heading('Mapping')

  ask('when was the boat furthest away from NYC (40.7127 N, 74.0059 W)? what was the distance?', func7)
  // use Leaflet to draw a line between NYC and this "furtherest away" location

  ask('what was the path of the boat?', func8)
  // use Leaflet to draw a line between every two locations

  ask('where were the most common sample value measured?', func9)
  // say, your answer to Question Six is 13, draw a marker for each measurement that has
  // at least one sample whose value is 13

  ask('how does the desensity of valid sample values change across the geographical area?', func10)
  // use the brightness to indicate high number of valid sample values each
  // for each measurement, draw a marker,
  // use the brightness to represent the number of valid samples
  // the brighter a spot, the higher the number
  // for those measurements without a valid sample, draw nothing

  heading('Science')

  ask('what is the distribution of fish?', func11)

  ask('what is the distribution of  are schools of zooplankton?', func12)


  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  })
  toggleSourecode()
}

function example1(){
  return items.length
}

function example2(){
  return items[0].Samples.length
}

function example3(){
  return _.filter(items[9].Samples, function(d){
    return d > 0
  }).join(', ')
}

function func1(){
  console.log(items)
  var nonzero = _.map(items, function(n){
    return n.Samples
  })

  var v = _.flatten(nonzero)

  var nz = _.filter(v,function(n){
    return n > 0
  })

  var un = _.uniq(nz)


  console.log("nonzero",un)
  return "There are " + un.length + " non zero and non negative." + un
}

function func2(){
  console.log(items)
  return '...'
}

function func3(){
  var gr = _.filter(items,function(n){
    return n.Ping_time == "09:57:18"
  })
  console.log("ping_time",gr)
  var ping_index = _.map(gr,function(n){
    return parseInt(n.Ping_index)
  })
  console.log("ping_index",ping_index)
  var sample = _.filter(items[ping_index - 1].Samples,function(d){
    return d == 7
  }).length
  console.log("value 7",sample)
  return sample
}

function func4(){
  var nonzero = _.groupBy(items, function(n){
    return n.Ping_index
  })

  var n = _.mapValues(nonzero,function(n){
    return _.filter(n[0].Samples,function(d){
      return d == 3
    }).length
  })

  var ma = _.map(n)
  var d = _.max(n)
  var p = _.findIndex(ma,function(p){
    return p == d
  })
  //console.log("index", p+1)
  //console.log(n)
  return "It is in the measurement " + (p + 1)
}

function func5(){
  var greaterzero = _.groupBy(items, function(n){
    return n.Ping_index
  })

  var n = _.mapValues(greaterzero,function(n){
    return _.filter(n[0].Samples,function(d){
      return d > 0
    }).length
  })

  var fil = _.filter(n,function(d){
    return d == 0
  }).length
  //console.log(fil)
  return "There are " + fil + " measurements that dont have sample value greater than 0"
}

function func6(){

  var greaterzero = _.map(items,function(n){
    return _.uniq(_.filter(n.Samples,function(p){
      return p > 0
    }))
  })

  var gr = _.flatten(greaterzero,_.value)
  var group = _.groupBy(gr,_.value)
  var mValue = _.mapValues(group,function(n){
    return _.map(n,function(d){
      return d
    }).length
  })

  
  var ma = _.pairs(mValue)
  var m = _.sortBy(ma,function(n){
    return n[1]
  })
  var revers = m.reverse()

  /*
  var n = _.mapValues(greaterzero,function(n){
    return _.filter(n[0].Samples,function(d){
      return d > 0
    }).length
  })*/
  /*
  var p = _.map(n)
  var na = _.max(n)
  var pa = _.findIndex(p,function(item){
    return item == na
  })*/
  //console.log("vil",ma)
  //console.log("key",m)
  //console.log(revers[0][0])
  return revers[0][0]
  
}

function func7(){

  // this sample code shows how to display a map and put a marker to visualize
  // the location of the first item (i.e., measurement data)
  // you need to adapt this code to answer the question

  var first = items[0]
  var pos = [first.Latitude, first.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  var new_york = { latitude:40.7127,longitude:74.0059 }


  console.log(minLonglit)


  var circle = L.circle(pos, 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);
  return '...'
}

function func8(){
  return '...'
}

function func9(){
  return '...'
}

function func10(){
  return '...'
}

function func11(){
  return '...'
}

function func12(){
  return '...'
}
