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
  {username: "user", password: "password"}
])

stories = Story.create([
  {title: nil},
  {title: nil},
  {title: nil}
])

fragments = Fragment.create([
  {user_id: 1, story_id: 1,
    body: "Once upon a time, in a land far far away,",
    published: true},
  {user_id: 2, story_id: 1,
    body: "there lived a giant hare with a nose as black as soot.",
    published: true},
  {user_id: 3, story_id: 1,
    body: "He had always thought of himself as a law abiding bunny, although there were times when he did look longingly at farmer Johnson's carrots.",
    published: true},
  {user_id: 1, story_id: 1,
    body: "They lay in the garden for weeks before harvest; it would not be too difficult to pick one up and take it home.",
    published: true},

  {user_id: 3, story_id: 2,
    body: "It was the best of times, it was the worst of times.",
    published: true},
  {user_id: 1, story_id: 2,
    body: "The year was 1842, and Bernard walked down the sprawling central avenue whistling himself a tune.",
    published: true},

  {user_id: 2, story_id: 3,
    body: "Wind pushed the rain against the windows with malicious intent, rattling the old wooden shutters.",
    published: true},
  {user_id: 3, story_id: 3,
    body: "Inside, the light from the candle flickered, threatening to submit to the darkness.",
    published: true}
])
