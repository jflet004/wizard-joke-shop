puts "Deleting previous data"
Item.destroy_all

puts "Seeding"

#Items
Item.create([{name:"Basic Blaze Box", description:"A basic selection of Weasleys Wild-Fire Whiz-Bangs, the twins wizarding fireworks.", img_url:"./images/basic_blaze_box.png", price:5}, {name:"Bruise-healing paste", description:"Thick yellow paste that heals bruises within an hour. Fred gave some to Hermione to heal the black eye she got from a Punching telescope.", img_url:"./images/bruising_paste.png", price:7}, {name:"Canary Creams", description:"Have the appearance and taste of ordinary custard creams, but transfigure the eater into a huge canary. The effect is short-lived, however, since the person moults a few moments later and becomes his or her normal self.", img_url:"", price:12}, {name:"Decoy Detonators", description:"Weird-looking black horn-type objects that scurry out of sight and make a loud noise to create a diversion", img_url:"", price:9}, {name:"Deflagration Deluxe", description:"A deluxe selection of Weasleys Wild-Fire Whiz-Bangs, the twins wizarding fireworks.", img_url:"", price:20}])

puts "Done seeding!"
