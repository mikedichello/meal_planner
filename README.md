# Pie Charter
Pie Charter is a meal macronutrient log app. The user can input the meal macronutrients (Calories, Net Grams of Carbs, Fat, and Protein) and recall a quick visual overview of meal.


## Project Link
### [Pie Charter](#)

## Technologies Used
* ReactJS - Frontend
* Ruby On Rails - Backend API
* PostgreSQL - Database
* ChartJS - Pie Chart Canvas Rendering
* HTML5
* CSS Flexbox

* Additional Tools: 
    * [Faker](https://github.com/faker-ruby/faker)- Seed Data Generation
    * [Github](https://github.com/) - Version control
    * [Heroku](https://www.heroku.com/) - Deployment platform
    
   
## Our Process

#### User Stories
* The User should be able to see all meals saved in database
* The User should be able to view details of meal with click
* The User should be able to add new meals
* The User should be able to delete meals

#### Wireframing and Design Progress:

<img src="https://github.com/mikedichello/meal_planner/blob/master/screenshots/mealTrackerDay1.png"/>

## Color Palette
<img src="https://github.com/mikedichello/meal_planner/blob/master/screenshots/ColorPalette.png>


![mealTrackerDay14](https://github.com/mikedichello/meal_planner/blob/master/screenshots/mealTrackerDay2.gif)


## Challenges/Future Goals
* User authorization is functional, but not yet related to the Plots model. In the future we would like to create a relationship between the two models, so that plots are saved only for their users.
* We originally planned to use a third-party API, Trefle, to pull in a larger database of plants. However, many information fields with this API were listed as "null", and it became simpler to just create our own data for our initial production release. In the future we would like to figure out a more scalable solution to increase the size of our database.
* Another goal is to customize planting/harvesting time recommendations based off of a user's specified zipcode, using WeatherUnderground API's location-based frost dates.
* We also would like to explore using React DnD to create a drag and drop interface for the plot creation component

