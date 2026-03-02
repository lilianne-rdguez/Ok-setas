const domStubs = [
  { p: '36,00 €' },
  { p: '21,50 €'},
  { p: '16,95 €'},
  { p: '27,98 €'}
];
domStubs.sort((a,b) => {
   const priceA = parseFloat(a.p.replace('€', '').replace(',', '.') || '0');
   const priceB = parseFloat(b.p.replace('€', '').replace(',', '.') || '0');
   return priceA - priceB;
});
console.log('ascending:', domStubs);

domStubs.sort((a,b) => {
   const priceA = parseFloat(a.p.replace('€', '').replace(',', '.') || '0');
   const priceB = parseFloat(b.p.replace('€', '').replace(',', '.') || '0');
   return priceB - priceA;
});
console.log('descending:', domStubs);
