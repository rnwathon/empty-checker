const isNotEmpty = (d) => {
  if(d !== null || typeof d !== 'undefined'){
    if((typeof d === 'string' || d instanceof String) && d.replace(/\s/g, "")){
      return true
    }

    if(typeof d === 'number' && isFinite(d)){
      return true
    }

    if(d && typeof d === 'object' && d.constructor === Array && d.length){
      return true
    }

    if(d && typeof d === 'object' && d.constructor === Object && Object.keys(d).length){
      return true
    }
  }

  return false
}

module.exports = isNotEmpty;