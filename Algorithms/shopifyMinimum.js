function splitVariantsIntoNewProducts(datoEntity, variantLimit = 2) {
  resultArr = [];
  if (datoEntity.attributes.variants.length < 2) {
    return {
      title: datoEntity.attributes.title,
      sku: datoEntity.attributes.sku,
      variants: [{ name: datoEntity.attributes.variants[0].attributes.name, price: datoEntity.attributes.variants[0].attributes.price }],
    };
  }
  let i = 0;

  while (i < datoEntity.attributes.variants.length) {
    let buildAObj = { id: null, title: datoEntity.attributes.title, sku: datoEntity.attributes.sku, variants: [] };
    for (let j = i; j < i + variantLimit; j++) {
      if (j < datoEntity.attributes.variants.length) {
        // build the object here
        let namePush = datoEntity.attributes.variants[j].attributes.name;
        let pricePush = datoEntity.attributes.variants[j].attributes.price;

        buildAObj.variants.push({ name: namePush, price: pricePush });
      }
    }
    //this will reveal the true identity of the objects held within
    // console.log(buildAObj);
    resultArr.push(buildAObj);
    if (i + variantLimit > datoEntity.attributes.variants.length) {
      break;
    }
    i = i + variantLimit;
  }
  // let buildAObj = {id: null, title: datoEntity.attributes.title, sku: datoEntity.attributes.sku, variants: []};
  // while(i < datoEntity.attributes.variants.length) {
  //     // build the object here
  //     let namePush = datoEntity.attributes.variants[i].attributes.name
  //     let pricePush = datoEntity.attributes.variants[i].attributes.price

  //     buildAObj.variants.push({name: namePush, price: pricePush})
  //     resultArr.push(buildAObj);
  //     i++;
  // }
  return resultArr;
}
splitVariantsIntoNewProducts(datoEntity1);
splitVariantsIntoNewProducts(datoEntity2);
console.log(splitVariantsIntoNewProducts(datoEntity1));
console.log(splitVariantsIntoNewProducts(datoEntity2));
