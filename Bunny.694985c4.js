("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2272.register("fJuXR",(function(s,t){var i,e,o,h;i=s.exports,e="default",o=()=>d,Object.defineProperty(i,e,{get:o,set:h,enumerable:!0,configurable:!0});class n extends PIXI.Sprite{constructor(s,t){super(s),this.gravity=.75,this.speedX=10*Math.random(),this.speedY=10*Math.random()-5,this.bounds=t,this.anchor.x=.5,this.anchor.y=1}update(){this.position.x+=this.speedX,this.position.y+=this.speedY,this.speedY+=this.gravity,this.position.x>this.bounds.right?(this.speedX*=-1,this.position.x=this.bounds.right):this.position.x<this.bounds.left&&(this.speedX*=-1,this.position.x=this.bounds.left),this.position.y>this.bounds.bottom?(this.speedY*=-.85,this.position.y=this.bounds.bottom,Math.random()>.5&&(this.speedY-=6*Math.random())):this.position.y<this.bounds.top&&(this.speedY=0,this.position.y=this.bounds.top)}destroy(s){this.bounds=null,super.destroy(s)}}var d=n}));
//# sourceMappingURL=Bunny.694985c4.js.map
