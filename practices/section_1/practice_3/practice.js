function collect_same_elements(collection_a, object_b)
{
  //在这里写入代码
  var same=[]
  var k=0
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<object_b['value'].length;j++)
    {
      if(collection_a[i]==object_b['value'][j])
      {
        same[k]=collection_a[i]
        k++

      }

    }

  }
  return(same)
}

module.exports = collect_same_elements;
