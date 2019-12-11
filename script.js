$(function(){

  for(let i = 0; i<10; i++){
  $('<tr>', {id: i+'road' } ).appendTo(table);
    for(let l = 0; l<22; l++){
      let border = ["-right:","-left:","-top:", '-bottom:'];
      var rand = border[Math.floor(Math.random() * border.length)];
      var stroke = [[i], [l]];
      $('<td>', {id: i+'ryd'+l,  style: 'border'+rand + ' 5px solid #17171a;'}).appendTo(table);
      // console.log(stroke[0, 3]);
      
    }
  }

  $('<div class="block" id="block"></div>').appendTo(table);

  var td = $('td').attr('class', 'wall');
  // или так  var arr = document.getElementsByClassName('wall');
  
  var arr = $('.wall');
  arr[0].append(block);
  
  $('#table > td').each( function(inddex, elem){
    // console.log(  $(elem).attr('id'));

  })
  
  let z = 0;
  // let room = (idishnik).style.border;
  // console.log(room);
  
  
  $(document).keydown(function(e){
    let positionID = '#'+$(arr[z]).attr('id');
    switch(e.which){
        case 39: {
          // if($(positionID).css('border-right')=="none"){
          z+=1;
          arr[z].append(block);
          console.log(positionID);
        // block.css('backgroundColor', 'blue');
        // block.css('margin-left', posX+=20);    OLD VERSION
          // }
        }   break;
        case 37: {
          // if($(positionID).css('border-left')=="none"){
          z-=1;
          arr[z].append(block);
          console.log(positionID);
          // }
        }   break;
        case 40:    {
          z = z+22;
          arr[z].append(block);
          console.log(positionID);
        }   break;
        case 38:    {
          z = z-22;
          arr[z].append(block);
          console.log(positionID);
        }   
    }
  })
})
