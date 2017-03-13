
BB = [];
D = [];
var x;
function setup() {
  createCanvas (windowWidth,windowHeight);
  

 
for(i = 0 ; i < 1 ; i ++){
 BB[i] = new ball(random(width),random(height));
 
}

console.log(BB.length);

}

function draw() {
 background(40);
  ellipse(50, 50 ,50 );
 



for(i = 0 ; i < BB.length ; i ++){
 BB[i].update();
 BB[i].end   ();
 BB[i].show  ();
 BB[i].eat    ();
}
}

function ball (x,y){
  
  this.ref = createVector(0,0);
 
  this.pos = createVector(x,y);
  this.v = p5.Vector.random2D(1,1);
  this.acc = createVector(0,0);
  this.mass = 5;
  
this.update = function (){
  
 this.pos.add(this.v);
 this.v.add(this.acc);
 this.acc.mult(0);
};

this.show = function(){
    
    
  
     
    
   
    ellipse(this.pos.x , this.pos.y , this.mass );
  
  
  };
  
this.end = function (){
    
    if(this.pos.x > width || this.pos.x < 0 ) {
      
      this.v.x = this.v.x * -1;
       this.mass = this.mass + 1;
    BB.push(new ball(random(width),random(height)));
    }
    
    if (this.pos.y > height ||this.pos.y < 0  ) {
    
     this.v.y = this.v.y * -1;
       this.mass = this.mass + 1;
     BB.push(new ball(random(width),random(height)));
     
    }
     
     //console.log(frameRate);
     
     
     

     
         
  };
  
this.eat = function(){
    
   




};
  
}
function mousePressed(){
  
  BB.push(new ball(mouseX,mouseY));
     //BB.splice(0 , 1);
  
}
