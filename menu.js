// adds click function to hamburgermenu
let menu_next_state = true;
$('.nav-bar .burger-menu').click(function(){
  clickMenu(menu_next_state);
  menu_next_state = !menu_next_state;
  return
})

function clickMenu(open){
  if(open){
    $('.nav-bar').addClass('active');
    return
  }
  $('.nav-bar').removeClass('active');
}
