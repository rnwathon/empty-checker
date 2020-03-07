const isNotEmpty = (d) => {
  if(d !== null || typeof d !== 'undefined'){
    if((typeof d === 'string' || value instanceof String) && d.replace(/\s/g, "")){
      return true
    }
  }

  return false
}

module.exports = isNotEmpty;