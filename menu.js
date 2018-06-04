// adds click function to hamburgermenu
let menu_next_state = true;
$('.nav-bar .burger-menu').click(function(){
  clickMenu(menu_next_state);
  menu_next_state = !menu_next_state;
  return
})

// TODO change state of menu_next_state when is clicked it should be set to true. currently when a menu item is clicked it will close the menu but when clicked on menu button it will not open unless clicked again. :easy
function clickMenu(open){
  if(open){
    $('.nav-bar').addClass('active');
    return
  }
  $('.nav-bar').removeClass('active');
}
