/* PitchLab physics: metres, seconds. Pure functions shared by preview and replay. */
(function(root){
'use strict';
const R=.22,DT=1/120;
function launch(ball,target,speed,loft,spin){const a=Math.atan2(target.y-ball.y,target.x-ball.x),e=loft*Math.PI/180;return {...ball,vx:Math.cos(a)*speed*Math.cos(e),vy:Math.sin(a)*speed*Math.cos(e),vz:speed*Math.sin(e),spin,t:0};}
function step(b,players,dt=DT){
const s={...b};const v=Math.hypot(s.vx,s.vy,s.vz);const ax=-.009*v*s.vx-.018*s.spin*s.vy,ay=-.009*v*s.vy+.018*s.spin*s.vx;
s.vx+=ax*dt;s.vy+=ay*dt;s.vz+=(-9.81-.009*v*s.vz)*dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.z+=s.vz*dt;s.t+=dt;
if(s.z<R){s.z=R;if(s.vz<-.65){s.vz=-s.vz*.5;s.vx*=.83;s.vy*=.83;}else s.vz=0;const speed=Math.hypot(s.vx,s.vy);if(speed){const k=Math.max(0,speed-1.3*dt)/speed;s.vx*=k;s.vy*=k;}s.spin*=Math.exp(-dt);}
for(const p of players){if(s.z>2)continue;const dx=s.x-p.x,dy=s.y-p.y,d=Math.hypot(dx,dy),r=.68;if(d<r&&d>1e-8){const nx=dx/d,ny=dy/d,vn=s.vx*nx+s.vy*ny;s.x=p.x+nx*r;s.y=p.y+ny*r;if(vn<0){s.vx-=1.45*vn*nx;s.vy-=1.45*vn*ny;}}}
return s;
}
function trajectory(ball,target,speed,loft,spin,players){let b=launch(ball,target,speed,loft,spin),frames=[b];for(let i=1;i<=2400;i++){b=step(b,players);const done=Math.abs(b.x)>60||Math.abs(b.y)>42||(i>120&&b.z===R&&Math.hypot(b.vx,b.vy)<.08);if(i%4===0||done)frames.push(b);if(done)break;}return frames;}
const api={R,DT,launch,step,trajectory};if(typeof module!=='undefined')module.exports=api;root.PitchPhysics=api;
})(typeof window!=='undefined'?window:globalThis);
