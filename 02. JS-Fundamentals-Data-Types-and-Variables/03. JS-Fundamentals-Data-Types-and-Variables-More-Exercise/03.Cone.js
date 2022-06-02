/* 
r = radius
h = height
v = volume
l = lateral surface area
b = base surface
a = Total surface area
*/

function cone(r, h) {
  const v = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
  const l = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
  const b = Math.PI * Math.pow(r, 2);
  const a = l + b;
  console.log(`volume = ${v.toFixed(4)}`);
  console.log(`area = ${a.toFixed(4)}`);
}
cone(3, 5);
