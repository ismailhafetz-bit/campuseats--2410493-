# Week 1 Reflection

## 1. What is the difference between building a UI imperatively and declaratively?

Imperative programming explains the steps needed to change the user interface manually. React uses a declarative approach, where we describe what the interface should look like based on the current data and state.

## 2. Why must a component name start with a capital letter?

React uses capitalised names to identify custom components. Lowercase names are treated as built-in HTML elements.

## 3. What does a fragment do, and why not just use a div?

A fragment (`<>...</>`) allows a component to return multiple elements without adding an extra DOM element. It keeps the HTML structure cleaner when a wrapper is unnecessary.

## 4. Name one benefit of splitting the UI into small components.

Small components make code easier to understand, maintain and reuse. For example, Header and Footer can be managed separately from the menu.

# week 2 Reflection 

During Week 2, I had difficulty connecting useState, onAdd, and props across App.jsx, MenuList.jsx, and MenuItemCard.jsx. I learned how the selected vendor updates the menu and how clicking Add to cart updates the cart count in Header.jsx. I also encountered an import error with MenuList.jsx and fixed the missing default export. Testing the application helped me understand how to connect components and troubleshoot errors in React.nex