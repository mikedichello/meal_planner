# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
meals = Meal.create([
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 450,
       carbs_g: 40,
       fat_g: 20,
       protein_g: 27.5
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 600,
       carbs_g: 45,
       fat_g: 20,
       protein_g: 60
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 517,
       carbs_g: 40,
       fat_g: 33,
       protein_g: 27.5
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 450,
       carbs_g: 40,
       fat_g: 20,
       protein_g: 27.5
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 600,
       carbs_g: 45,
       fat_g: 20,
       protein_g: 60
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 517,
       carbs_g: 40,
       fat_g: 33,
       protein_g: 27.5
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 450,
       carbs_g: 40,
       fat_g: 20,
       protein_g: 27.5
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 600,
       carbs_g: 45,
       fat_g: 20,
       protein_g: 60
    },
    {
       name: Faker::Food.dish,
       description: Faker::Food.description,
       calories: 517,
       carbs_g: 40,
       fat_g: 33,
       protein_g: 27.5
    }
])