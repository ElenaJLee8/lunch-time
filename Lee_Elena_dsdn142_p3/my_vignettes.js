var centerx = 1280/2;
var centery = 720/2;
//Scene 1 Food
var tomato_wholex = 1160;
var tomato_wholey = 615;
var lettuce_wholex = 1155;
var lettuce_wholey = 345;
var cheeseblockx = 125;
var cheeseblocky = 300;
var egg_wholex= 125;
var egg_wholey= 480;
var cucumber_wholex = 1025;
var cucumber_wholey = 115;
//Scene 1 Movement
var is_cheese_dragging = false;
var cheese_on_top = false;
var is_egg_dragging = false;
var egg_on_top = false;
var is_cucumber_dragging = false;
var cucumber_on_top = false;
var is_lettuce_dragging = false;
var lettuce_on_top = false;
var is_tomato_dragging = false;
var tomato_on_top = false;

var cheese_sliced = false;
var egg_sliced = false;
var cucumber_sliced = false;
var lettuce_sliced = false;
var tomato_sliced = false;

var everythingsliced = false;

//Scene 2 Food
var bread1x =  170;
var bread1y = 170;
var bread2x = 130;
var bread2y = 170 ;
var cheese_pile_x = 150;
var cheese_pile_y= 455;
var eggpile_x = 130;
var eggpile_y = 640;
var cucumberpile_x = 1120;
var cucumberpile_y = 100;
var lettucestack_x = 1130;
var lettucestack_y = 350;
var tomatopile_x = 1110;
var tomatopile_y = 600;
//Scene 2 Movement
var is_cheese_dragging_s2 = false;
var cheese_on_top_s2 = false;
var is_tomato_dragging_s2 = false;
var tomato_on_top_s2 = false;
var is_lettuce_dragging_s2 = false;
var lettuce_on_top_s2 = false;
var is_egg_dragging_s2 = false;
var egg_on_top_s2 = false;
var is_cucumber_dragging_s2 = false;
var cucumber_on_top_s2 = false;
var is_bread1_dragging_s2 = false;
var bread1_on_top_s2 = false;
var is_bread2_dragging_s2 = false;
var bread2_on_top_s2 = false;
var lettucestack_released = false;
var tomatopile_released = false;
var cheesepile_released = false;
var eggpile_released = false;
var cucumberpile_released = false;
var bread1_released = false;
var bread2_released = false;
var everythingplaced = false;


//Frames for Animation Sequences
var frame_number = 0;
var frame_number_sparkle = 0;
var frame_number_sparkle_s2 = 0;
var frame_number_sparkle_s3 = 0;

//Scene 3
var bitesX = [];
var bitesY = [];

function setup_vignettes(vignettes){
  vignettes.scale_to_screen(true);
  vignettes.load_sound("bloop", "mp3");
  vignettes.load_image_sequence ("sparkle", "png", 21);
  vignettes.load_image_sequence ("arrow_yup", "png", 20);

  vignettes.load_image("counter top again", "png");
  vignettes.load_image("cutting board4", "png");
  vignettes.load_image("egg top view4", "png");
  vignettes.load_image("cheese block", "png");
  vignettes.load_image("tomato whole1", "png");
  vignettes.load_image("cucumber whole4", "png");
  vignettes.load_image("lettuce top view3", "png");
  vignettes.load_image("table", "png");
  vignettes.load_image("plate1", "png");
  vignettes.load_image("bread1", "png");
  vignettes.load_image("cheese slice1", "png");
  vignettes.load_image("cheese slice2", "png");
  vignettes.load_image("cheese pile", "png");
  vignettes.load_image("cucumber slice1", "png");
  vignettes.load_image("cucumber slice2", "png");
  vignettes.load_image("cucumber slice3", "png");
  vignettes.load_image("cucumber pile", "png");
  vignettes.load_image("lettuce piece1", "png");
  vignettes.load_image("lettuce piece2", "png");
  vignettes.load_image("lettuce stack", "png");
  vignettes.load_image("tomato slice1", "png");
  vignettes.load_image("tomato slice2", "png");
  vignettes.load_image("tomato slice3", "png");
  vignettes.load_image("tomato pile", "png");
  vignettes.load_image("egg slice1", "png");
  vignettes.load_image("egg slice2", "png");
  vignettes.load_image("egg slice3", "png");
  vignettes.load_image("egg pile", "png");
  vignettes.load_image("placemat1", "png");

}

function setup_scenes(){
  var scene1         = new Scene(scene1_draw);
  scene1.click       = scene1_click;
  scene1.key_pressed = scene1_keypress;
  scene1.mouse_pressed  = scene1_mouse_pressed;
  scene1.mouse_released = scene1_mouse_released;


  var scene2         = new Scene(scene2_draw);
  scene2.click       = scene2_click;
  scene2.key_pressed = scene2_keypress;
  scene2.mouse_pressed  = scene2_mouse_pressed;
  scene2.mouse_released = scene2_mouse_released;


  var scene3         = new Scene(scene3_draw);
  scene3.click       = scene3_click;
  scene3.key_pressed = scene3_keypress;
}



function scene1_draw(){
  vignettes.draw_image("counter top again",centerx, centery);
  vignettes.draw_image("cutting board4", centerx, 410);

if(is_egg_dragging == true){
     egg_wholex = mouseX;
     egg_wholey = mouseY;
     console.log("egg is dragging");
 }

  if(egg_on_top == false){
  vignettes.draw_image("egg top view4", egg_wholex, egg_wholey);
  }else{

    vignettes.draw_image("egg slice1", centerx-100, centery+80);
    vignettes.draw_image("egg slice2", centerx-130, centery+80);
    vignettes.draw_image("egg slice3", centerx-160, centery+80);
    egg_sliced = true;

  }

  if(is_cheese_dragging == true){
     cheeseblockx = mouseX;
     cheeseblocky = mouseY;
     console.log("cheese is dragging");

   }

  if(cheese_on_top == false){
    vignettes.draw_image("cheese block", cheeseblockx, cheeseblocky);


  }else{
    vignettes.draw_image("cheese slice1", centerx-110, centery-90);
    vignettes.draw_image("cheese slice2", centerx-110, centery-90);
    cheese_sliced = true;
  }

  if(is_cucumber_dragging == true){
     cucumber_wholex = mouseX;
     cucumber_wholey = mouseY;
     console.log("cucumber is dragging");
   }

  if(cucumber_on_top == false){
    vignettes.draw_image("cucumber whole4", cucumber_wholex, cucumber_wholey);

  }else{
    vignettes.draw_image("cucumber slice1", centerx+170, centery-135);
    vignettes.draw_image("cucumber slice2", centerx+230, centery-135);
    vignettes.draw_image("cucumber slice3", centerx+290, centery-135);
    cucumber_sliced = true;

  }
  if(is_lettuce_dragging == true){
     lettuce_wholex = mouseX;
     lettuce_wholey = mouseY;
     console.log("lettuce is dragging");

   }

  if(lettuce_on_top == false){
  vignettes.draw_image("lettuce top view3", lettuce_wholex, lettuce_wholey);

  }else{

    vignettes.draw_image("lettuce piece2", centerx+220, centery+120);
    vignettes.draw_image("lettuce piece1", centerx+220, centery+120);
    lettuce_sliced = true;

  }

  if(is_tomato_dragging == true){
     tomato_wholex = mouseX;
     tomato_wholey = mouseY;
     console.log("tomato is dragging");
   }

  if(tomato_on_top == false){
  vignettes.draw_image("tomato whole1", tomato_wholex, tomato_wholey);

  }else{

    vignettes.draw_image("tomato slice1", centerx-80, centery+230);
    vignettes.draw_image("tomato slice2", centerx-120, centery+230);
    vignettes.draw_image("tomato slice3", centerx-160, centery+230);
    tomato_sliced = true;
   }
if((cheese_sliced && egg_sliced && cucumber_sliced && lettuce_sliced && tomato_sliced) == true){
  everythingsliced = true;
}else{
  everythingsliced = false;
}

if(everythingsliced == true){
  vignettes.draw_image_from_sequence("arrow_yup", 1150, centery, frame_number);
}
frame_number = frame_number +1;
  if(frame_number == 20){
    frame_number = 0;
  }

//Sparkle stuff for Scene 1
if(cheese_on_top == false){
  vignettes.draw_image_from_sequence("sparkle", cheeseblockx-30, cheeseblocky-30, frame_number_sparkle);
}

if(egg_on_top == false && cheese_sliced == true){
    vignettes.draw_image_from_sequence("sparkle", egg_wholex-10, egg_wholey-10, frame_number_sparkle);
  }

if(cucumber_on_top == false && cheese_sliced== true && egg_sliced == true){
      vignettes.draw_image_from_sequence("sparkle", cucumber_wholex-110, cucumber_wholey-60, frame_number_sparkle);
    }
if(lettuce_on_top == false && cheese_sliced== true && egg_sliced == true && cucumber_sliced == true){
          vignettes.draw_image_from_sequence("sparkle", lettuce_wholex-40, lettuce_wholey-40, frame_number_sparkle);
        }
if(tomato_on_top == false && cheese_sliced== true && egg_sliced == true && cucumber_sliced == true && lettuce_sliced == true){
                  vignettes.draw_image_from_sequence("sparkle", tomato_wholex-40, tomato_wholey-50, frame_number_sparkle);
                }
                frame_number_sparkle = frame_number_sparkle +1;
                  if(frame_number_sparkle == 21){
                    frame_number_sparkle = 0;
                  }
}

function scene1_click(){
  console.log("scene1 clicked!", mouseX, mouseY);
}

function scene1_keypress(){
  console.log("scene1 key pressed!");
}


function  scene1_mouse_released(){
  //Egg
  if(mouseX > centerx-370 && mouseX < centerx+370){
    if(mouseY > centery-270 && mouseY < centery+270){
      if(is_egg_dragging == true){//-----------HERE-----------------
        egg_on_top = true;
      }
    }
  }
  is_egg_dragging = false;
//sound
if((is_egg_dragging == false) && (egg_on_top == true) && (egg_sliced == false)){
  vignettes.play_sound("bloop");

}
//Cheese
  if(mouseX > centerx-370 && mouseX < centerx+370){
    if(mouseY > centery-270 && mouseY < centery+270){
      if(is_cheese_dragging == true){
        cheese_on_top = true;
      }
    }
  }
  is_cheese_dragging = false;
//sound
  if((is_cheese_dragging == false) && (cheese_on_top == true) && (cheese_sliced == false)){
    vignettes.play_sound("bloop");

  }

//Cucumber
  if(mouseX > centerx-370 && mouseX < centerx+370){
    if(mouseY > centery-270 && mouseY < centery+270){
      if(is_cucumber_dragging == true){
        cucumber_on_top = true;
      }
    }
  }
  is_cucumber_dragging = false;

//sound
if((is_cucumber_dragging == false) && (cucumber_on_top == true) && (cucumber_sliced == false)){
  vignettes.play_sound("bloop");

}
//Lettuce
  if(mouseX > centerx-370 && mouseX < centerx+370){
    if(mouseY > centery-270 && mouseY < centery+270){
      if(is_lettuce_dragging == true){
        lettuce_on_top = true;
      }
    }
  }
  is_lettuce_dragging = false;

//sound
if((is_lettuce_dragging == false) && (lettuce_on_top == true) && (lettuce_sliced == false)){
  vignettes.play_sound("bloop");
}
//Tomato
  if(mouseX > centerx-370 && mouseX < centerx+370){
    if(mouseY > centery-270 && mouseY < centery+270){
      if(is_tomato_dragging == true){
        tomato_on_top = true;
      }
    }
  }
  is_tomato_dragging = false;

//sound
if((is_tomato_dragging == false) && (tomato_on_top == true) && (tomato_sliced == false)){
  vignettes.play_sound("bloop");

}
}
function scene1_mouse_pressed(){
  if(mouseX > egg_wholex-70 && mouseX < egg_wholex+70){
    if(mouseY > egg_wholey-70 && mouseY < egg_wholey+70){
      is_egg_dragging = true;
    }
    }

  if(mouseX > cheeseblockx-100 && mouseX < cheeseblockx+100){
    if(mouseY > cheeseblocky-100 && mouseY < cheeseblocky+100){
      is_cheese_dragging = true;
    }
  }
  if(mouseX > cucumber_wholex-200 && mouseX < cucumber_wholex+200){
    if(mouseY > cucumber_wholey-100 && mouseY < cucumber_wholey+100){
      is_cucumber_dragging = true;//-----------HERE-----------------
    }
}
if(mouseX > lettuce_wholex-100 && mouseX < lettuce_wholex+100){
  if(mouseY > lettuce_wholey-100 && mouseY < lettuce_wholey+100){
    is_lettuce_dragging = true;//-----------HERE-----------------
  }
}

if(mouseX > tomato_wholex-100 && mouseX < tomato_wholex+100){
  if(mouseY > tomato_wholey-100 && mouseY < tomato_wholey+100){
    is_tomato_dragging = true;//-----------HERE-----------------
  }
}
}


function scene2_draw(){
  vignettes.draw_image("counter top again",centerx, centery);
  vignettes.draw_image("plate1", centerx, centery);

if(is_bread1_dragging_s2 == true){
  bread1x = mouseX;
  bread1y = mouseY;
}

if(bread1_on_top_s2 == false){
  vignettes.draw_image("bread1", bread1x, bread1y);
}else{
  vignettes.draw_image("bread1", centerx, centery);
bread1_released = true;
}

  if(is_cheese_dragging_s2 == true){
     cheese_pile_x = mouseX;
     cheese_pile_y = mouseY;
   }

  if(cheese_on_top_s2 == false){
    vignettes.draw_image("cheese pile", cheese_pile_x, cheese_pile_y);

  }else{
    vignettes.draw_image("cheese pile", centerx, centery);
    cheesepile_released = true;
  }

  if(is_egg_dragging_s2 == true){
     eggpile_x = mouseX;
     eggpile_y = mouseY;


   }

  if(egg_on_top_s2 == false){

  vignettes.draw_image("egg pile", eggpile_x, eggpile_y);

  }else{
    vignettes.draw_image("egg pile", centerx, centery);
    eggpile_released = true;
  }

  if(is_cucumber_dragging_s2 == true){
     cucumberpile_x = mouseX;
     cucumberpile_y = mouseY;

   }

  if(cucumber_on_top_s2 == false){
    vignettes.draw_image("cucumber pile", cucumberpile_x, cucumberpile_y);

  }else{
    vignettes.draw_image("cucumber pile", centerx, centery);
    cucumberpile_released = true;

  }
  if(is_lettuce_dragging_s2 == true){
     lettucestack_x = mouseX;
     lettucestack_y = mouseY;
   }

  if(lettuce_on_top_s2 == false){
  vignettes.draw_image("lettuce stack", lettucestack_x, lettucestack_y);

  }else{
    vignettes.draw_image("lettuce stack", centerx, centery-10);
    lettucestack_released = true;
  }

  if(is_tomato_dragging_s2 == true){
     tomatopile_x = mouseX;
     tomatopile_y = mouseY;
   }

  if(tomato_on_top_s2 == false){
  vignettes.draw_image("tomato pile", tomatopile_x, tomatopile_y);

  }else{

    vignettes.draw_image("tomato pile", centerx, centery);
    tomatopile_released = true;

  }

  if(is_bread2_dragging_s2 == true && (tomatopile_released ||lettucestack_released || cucumberpile_released || cheesepile_released || eggpile_released)== true ){
     bread2x = mouseX;
     bread2y = mouseY;


}
  if(bread2_on_top_s2 == false){
  vignettes.draw_image("bread1", bread2x, bread2y);

  }else{

  vignettes.draw_image("bread1", centerx, centery);
  bread2_released = true;


  if((cheesepile_released && eggpile_released && cucumberpile_released && lettucestack_released && tomatopile_released && bread1_released && bread2_released) == true){
    everythingplaced = true;
  }else{
    everythingplaced = false;

  }

  if(everythingplaced == true){
    console.log("everything placed");
    vignettes.draw_image_from_sequence("arrow_yup", 1150, centery, frame_number);
  }
  frame_number = frame_number +1;
    if(frame_number == 20){
      frame_number = 0;
    }

}

//Sparkle stuff for Scene 2

if(bread1_on_top_s2 == false){
vignettes.draw_image_from_sequence("sparkle", bread1x-50, bread1y-50, frame_number_sparkle_s2);
}

if(cheese_on_top_s2 == false && bread1_released == true){
  vignettes.draw_image_from_sequence("sparkle", cheese_pile_x-20, cheese_pile_y-20, frame_number_sparkle_s2);
}

if(egg_on_top_s2 == false && bread1_released == true && cheesepile_released == true){
    vignettes.draw_image_from_sequence("sparkle", eggpile_x-10, eggpile_y, frame_number_sparkle_s2);
  }

if(cucumber_on_top_s2 == false && bread1_released == true && cheesepile_released== true && eggpile_released == true){
      vignettes.draw_image_from_sequence("sparkle", cucumberpile_x, cucumberpile_y-20, frame_number_sparkle_s2);
    }
if(lettuce_on_top_s2 == false && bread1_released == true && cheesepile_released== true && eggpile_released == true && cucumberpile_released == true){
          vignettes.draw_image_from_sequence("sparkle", lettucestack_x, lettucestack_y-20, frame_number_sparkle_s2);
        }
if(tomato_on_top_s2 == false && bread1_released == true && cheesepile_released== true && eggpile_released == true && cucumberpile_released == true && lettucestack_released == true){
                  vignettes.draw_image_from_sequence("sparkle", tomatopile_x, tomatopile_y-20, frame_number_sparkle_s2);
                }

if(bread2_on_top_s2 == false && bread1_released == true && cheesepile_released== true && eggpile_released == true && cucumberpile_released == true && lettucestack_released == true && tomatopile_released == true){
         vignettes.draw_image_from_sequence("sparkle", bread2x-30, bread2y-20, frame_number_sparkle_s2);
                }

                frame_number_sparkle_s2 = frame_number_sparkle_s2 +1;
                  if(frame_number_sparkle_s2 == 21){
                    frame_number_sparkle_s2 = 0;
                  }
  }


  function scene2_click(){
  console.log("scene2 clicked!", mouseX, mouseY);
  }

  function scene2_keypress(){
  console.log("scene2 key pressed!");

  }


  function  scene2_mouse_released(){

    if(mouseX > centerx-160 && mouseX < centerx+160){
      if(mouseY > centery-160 && mouseY < centery+160){
        if(is_bread1_dragging_s2 == true){
           bread1_on_top_s2 = true;

        }
      }
    }
    is_bread1_dragging_s2 = false;
//sound
if((is_bread1_dragging_s2 == false) && (bread1_on_top_s2 == true) && (bread1_released == false)){
      vignettes.play_sound("bloop");
}

  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_egg_dragging_s2 == true){
        egg_on_top_s2 = true;

      }
    }
  }
  is_egg_dragging_s2 = false;

//sound
if((is_egg_dragging_s2 == false) && (egg_on_top_s2 == true) && (eggpile_released == false)){
      vignettes.play_sound("bloop");
}

  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_cheese_dragging_s2 == true){
        cheese_on_top_s2 = true;
      }
    }
  }
  is_cheese_dragging_s2 = false;
  //sound
  if((is_cheese_dragging_s2 == false) && (cheese_on_top_s2 == true) && (cheesepile_released == false)){
        vignettes.play_sound("bloop");
  }

  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_cucumber_dragging_s2 == true){
        cucumber_on_top_s2 = true;
      }
    }
  }
  is_cucumber_dragging_s2 = false;//-----------HERE-----------------
  //sound
  if((is_cucumber_dragging_s2 == false) && (cucumber_on_top_s2 == true) && (cucumberpile_released == false)){
        vignettes.play_sound("bloop");
  }

  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_lettuce_dragging_s2 == true){
        lettuce_on_top_s2 = true;
      }
    }
  }
  is_lettuce_dragging_s2 = false;
  //sound
  if((is_lettuce_dragging_s2 == false) && (lettuce_on_top_s2 == true) && (lettucestack_released == false)){
        vignettes.play_sound("bloop");
  }

  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_tomato_dragging_s2 == true){
        tomato_on_top_s2 = true;
      }
    }
  }
  is_tomato_dragging_s2 = false;
  //sound
  if((is_tomato_dragging_s2 == false) && (tomato_on_top_s2 == true) && (tomatopile_released == false)){
        vignettes.play_sound("bloop");
  }


if((tomatopile_released||lettucestack_released|| cucumberpile_released|| cheesepile_released|| eggpile_released)==true){
  if(mouseX > centerx-160 && mouseX < centerx+160){
    if(mouseY > centery-160 && mouseY < centery+160){
      if(is_bread2_dragging_s2 == true){//-----------HERE-----------------
        bread2_on_top_s2 = true;
      }
    }
  }
}
  is_bread2_dragging_s2 = false;
  //sound
  if((is_bread2_dragging_s2 == false) && (bread2_on_top_s2 == true) && (bread2_released == false)){
        vignettes.play_sound("bloop");
  }


  }
  function scene2_mouse_pressed(){
    if(mouseX > bread1x-120 && mouseX < bread1x+120){
      if(mouseY > bread1y-140 && mouseY < bread1y+140){
        is_bread1_dragging_s2 = true;//-----------HERE-----------------
      }
    }

  if(mouseX > eggpile_x-70 && mouseX < eggpile_x+70){
    if(mouseY > eggpile_y-70 && mouseY < eggpile_y+70){
      is_egg_dragging_s2 = true;//-----------HERE-----------------
    }
  }

  if(mouseX > cheese_pile_x-100 && mouseX < cheese_pile_x+100){
    if(mouseY > cheese_pile_y-100 && mouseY < cheese_pile_y+100){
      is_cheese_dragging_s2 = true;//-----------HERE-----------------
    }
  }
  if(mouseX > cucumberpile_x-100 && mouseX < cucumberpile_x+100){
    if(mouseY > cucumberpile_y-100 && mouseY < cucumberpile_y+100){
      is_cucumber_dragging_s2 = true;//-----------HERE-----------------
    }
  }
  if(mouseX > lettucestack_x-100 && mouseX < lettucestack_x+100){
  if(mouseY > lettucestack_y-100 && mouseY < lettucestack_y+100){
    is_lettuce_dragging_s2 = true;
  }
  }

  if(mouseX > tomatopile_x-100 && mouseX < tomatopile_x+100){
  if(mouseY > tomatopile_y-100 && mouseY < tomatopile_y+100){
    is_tomato_dragging_s2 = true;
  }
  }

  if(mouseX > bread2x-120 && mouseX < bread2x+120){
    if(mouseY > bread2y-140 && mouseY < bread2y+140){
      is_bread2_dragging_s2 = true;
    }
  }
}

function scene2_click(){
  console.log("scene2 clicked!");
}

function scene2_keypress(){
  console.log("scene2 key pressed!");
}

function scene3_draw(){
  vignettes.draw_image("table",centerx, centery);
  vignettes.draw_image("placemat1",centerx, 420);
  vignettes.draw_image("plate1", centerx, centery);
  vignettes.draw_image("bread1", centerx, centery);
  vignettes.draw_image("cheese pile", centerx, centery);
  vignettes.draw_image("egg pile", centerx, centery);
  vignettes.draw_image("cucumber pile", centerx, centery);
  vignettes.draw_image("lettuce stack", centerx, centery-10);
  vignettes.draw_image("tomato pile", centerx, centery);
  vignettes.draw_image("bread1", centerx, centery);


  vignettes.draw_image_from_sequence("sparkle", centerx, centery, frame_number_sparkle_s3);
  vignettes.draw_image_from_sequence("sparkle", centerx-40, centery-60, frame_number_sparkle_s3);
  vignettes.draw_image_from_sequence("sparkle", centerx+40, centery+60, frame_number_sparkle_s3);


         frame_number_sparkle_s3 = frame_number_sparkle_s3 +1;
           if(frame_number_sparkle_s3 == 21){
             frame_number_sparkle_s3 = 0;
           }


  fill(250,252,251);
  noStroke();
//Bites
  for( var i = 0; i <= bitesX.length ; i+=1){
    ellipse(bitesX[i], bitesY[i],100,100)
  }
}

function scene3_click(){
  console.log("scene3 clicked!", mouseX, mouseY);
  if(dist (centerx, centery, mouseX, mouseY) <155){
  vignettes.play_sound("bloop");

  bitesX.push(mouseX);
  bitesY.push(mouseY);
}

}

function scene3_keypress(){
  console.log("scene3 key pressed!");
}
