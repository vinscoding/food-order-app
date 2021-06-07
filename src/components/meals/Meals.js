import React from "react";
import Mealbar from "./MealBar";
import classes from "./Meals.module.css";

const DummyMeals = [
  {
    id: "m1",
    name: "Veg Biriyani",
    description: "Finest rice and veggies",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Indiany",
    description: "A Indian specialty!",
    price: 160.5,
  },
  {
    id: "m3",
    name: "Barbecue fruity",
    description: "farm, raw, fruits",
    price: 120.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 180.99,
  },
];
export default function Meals() {
  return (
    <main className={classes.main}>
      <div className={classes.mealsContainer}>
        {DummyMeals.map((meal) => (
          <Mealbar
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </div>
    </main>
  );
}
