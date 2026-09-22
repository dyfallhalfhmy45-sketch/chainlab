const test = require('node:test');
const assert = require('node:assert/strict');
const P = require('../dist/physics.js');
const start = {x:0,y:0,z:P.R};
test('ground pass stays above the surface and slows down',()=>{
 const f=P.trajectory(start,{x:30,y:0},12,0,0,[]);
 assert(f.every(b=>b.z>=P.R && Number.isFinite(b.x)));
 assert(f.at(-1).x>10);
 assert(Math.hypot(f.at(-1).vx,f.at(-1).vy)<.1);
});
test('lofted ball rises, falls, then bounces',()=>{
 const f=P.trajectory(start,{x:30,y:0},15,40,0,[]);
 assert(Math.max(...f.map(b=>b.z))>3);
 const falling=f.findIndex(b=>b.vz<0);
 assert(falling>0);
 assert(f.slice(falling+1).some(b=>b.vz>0));
});
test('opposite spin produces mirrored lateral deflection',()=>{
 const a=P.trajectory(start,{x:30,y:0},22,28,-5,[]);
 const b=P.trajectory(start,{x:30,y:0},22,28,5,[]);
 assert(a[30].y<0 && b[30].y>0);
 assert(Math.abs(a[30].y+b[30].y)<1e-8);
});
test('low ball rebounds from a stationary player',()=>{
 const f=P.trajectory(start,{x:30,y:0},12,0,0,[{x:5,y:0}]);
 assert(f.some(b=>b.vx<0));
});
test('vertical kick is finite and returns toward the ground',()=>{
 let b=P.launch(start,{x:0,y:0},10,90,0);
 for(let i=0;i<600;i++)b=P.step(b,[]);
 assert(Number.isFinite(b.x)&&Number.isFinite(b.z));
 assert(b.z>=P.R && b.z<1);
});
