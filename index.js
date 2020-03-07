const isNotEmpty = (d) => {
  if(d !== null || typeof d !== 'undefined'){
    if((typeof d === 'string' || d instanceof String) && d.replace(/\s/g, "")){
      return true
    }

    if(typeof d === 'number' && isFinite(d)){
      return true
    }
  }

  return false
}

module.exports = isNotEmpty;