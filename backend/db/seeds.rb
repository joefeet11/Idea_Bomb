# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating Ideas..."
i1 = Idea.create!(detail: 'I want to build out a robot that will unlock things based off of facial recognition.', user_id: 1)
i2 = Idea.create!(detail: 'Thinking about a new way to make money.', user_id: 2)
i3 = Idea.create!(detail: 'Sometimes I think about developing a new propolusion system.', user_id: 3)

puts "Creating follows..."
f1 = Follow.create!(follower_id: 1, followed_user_id: 2)
f1 = Follow.create!(follower_id: 2, followed_user_id: 1)
f1 = Follow.create!(follower_id: 2, followed_user_id: 3)

puts "Creating comments..."
c1 = Comment.create!(content: "Nice", user_id: 1, idea: i2)
c2 = Comment.create!(content: "That's cool", user_id: 3, idea: i2)
