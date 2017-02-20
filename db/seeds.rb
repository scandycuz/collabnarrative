# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  {username: "admin", password: "password"},
  {username: "guest", password: "password"},
  {username: "williamgolding", password: "password"},
  {username: "kurtvonnegut", password: "password"},
  {username: "georgeorwell", password: "password"},
  {username: "jorgeluisborges", password: "password"}
])

stories = Story.create([
  {title: nil},
  {title: nil},
  {title: nil},
  {title: nil},
  {title: nil},
  {title: nil}
])

fragments = Fragment.create([
  {user_id: 1, story_id: 1,
    body: "Once upon a time, in a land far far away,",
    published: true},
  {user_id: 2, story_id: 1,
    body: "there lived a giant hare with a proclivity for quiet and relaxation.",
    published: true},
  {user_id: 3, story_id: 1,
    body: "He thought of himself as a law abiding rabbit, although there were times when he would look longingly at Farmer Johnson's carrots.",
    published: true},
  {user_id: 1, story_id: 1,
    body: "They lay in the garden for weeks before harvest; it would not be too difficult to pick one up and take it home.",
    published: true},

  {user_id: 3, story_id: 2,
    body: "Ships at a distance have every man's wish on board.",
    published: true},

  {user_id: 2, story_id: 3,
    body: "The boy with fair hair lowered himself down the last few feet of rock and began to pick his way toward the lagoon.",
    published: true},
  {user_id: 3, story_id: 3,
    body: "The sand burned his feet, and used the leaves and brush as protection when he could.",
    published: true},

  {user_id: 4, story_id: 4,
    body: "All this happened, more or less.",
    published: true},
  {user_id: 5, story_id: 5,
    body: "It was a bright cold day in April, and the clocks were striking thirteen.",
    published: true},
  {user_id: 6, story_id: 6,
    body: "No one saw him disembark in the unanimous night, no one saw the bamboo canoe sinking into the sacred mud,",
    published: true}
])
