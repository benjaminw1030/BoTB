1. Page loads
  divs with van and battle sections and character creation potentially (show/hide when appropriate)
2. Game starts with button press
3. Player is created (easy, medium, hard backgrounds/ Professional, Amateur, Whimsical)(radio buttons - with descrip above value), along with enemies
  let player = new musician(...., true)
  let enemy1 = new musician(...., false)
  etc etc
4. (Placeholder Dialogue/Prep Phase) 
  Prep Phase: Countdown Bar - every action brings down bar until 0 and next fight will begin (tied to button press??)
  Manage inventory(Equip/UnEquip stuff) Use Item (consumables) Resource Gathering, Shop (use this.money), Practice (increase stats) Talk w/ Bandmates (refresh bandmates)
  Posters for Next Event(displayed during prep)
5. Tutorial? - Garage Band Friend - button to start fight?
6. Turn-based, player goes first (potentially speed stat)
  Keep track of turns, make it switch between player and opponent.
7. Enemy is pulled - player has....
  Play Chorus, flourish move % based off of stats, Take a Breather (double focus for a turn),
  Solo(Charge Attack) - (you/your enemy is preparing a complex melody), Inventory(bandmates, items) (disposable guitars to break, pyrotechnics, bite head off fake rodent)
  boss rolls between 1-4 and then that option is executed (put moves in array, reference in index, use switch/case to decide) turn counter (use modulus to switch based on remainder)
8. check the rock of each opponent at the end of a turn to add effects and determine when the battle is over.
method endfight (checks rock meter if player >= 100, display player win, if enemy >= 100 player loses, otherwise fight continues)(decrement money until floor)
9. inventory step (player gets money)(pick an item/bandmate)(amp vs friendship)
10. (Dialogue Piece/Prep Phase)


Post Lunch - 
End Game Goal = Build first dialogue(UI) + fight + prep (intro)

Separate divs - Intro, Metal, Country, Kpop, Finale