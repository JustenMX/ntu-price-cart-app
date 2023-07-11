## NTU SCTP in Software Engineering

## Module 2.5 / 2.6 / 2.7 Assignment

### useState, useReducer, useContext, props

React application that demonstrates the use of various React hooks and concepts, such as useState, useReducer, useContext, and props. The project consists of multiple components that together create a dynamic and interactive user experience.

The Counter component allows users to increment, decrement, and reset a counter value. The Price component manages product names and prices, while also implementing discount logic. The ViewList component displays a table of products, including their total price, and provides the ability to add new table columns.

The project emphasizes the separation of container and presentational components, ensuring a clean and modular code structure. The higher-order Product component handles business logic and calculations, while other components consume and display the data.

Additionally, the project offers additional implementations, such as a stats dashboard that calculates total expenses, total net, and total savings based on accumulated values from the table. There is also a refactored version of the code using useReducer and useContext hooks, as well as a CRUD application for the ViewList component.

### Project Brief:

Create a React Application and the application, perform the following tasks:

- Counter component to keep track of increment, decrement and reset
- Price compomnent to keep track of Product Name and Price
- Display discount and display discount logic
- ViewList component that takes in all state updates and displays in table
- Show the total price for each item row, including discount
- Show the sum total of all items in the table
- Show and compare sum with discount savings, in actual $
- Keep all calculations (business logic) in the higher-order Product component
- Update ViewList when adding new table columns
- As much as possible, keep the container and presentational components separated

Additonal implementations:

- Stats dashboard that takes in the accumulative values from the table and calculates `Total Expenses`, `Total Nett` and `Total Savings`
- Refactored the code using `useReducer` and `useContext` hooks ([refactor-reducer-context-branch](https://github.com/JustenMX/ntu-price-cart-app/tree/a0af1b5637e6c812c1bf9528352c8a34c8ca629a "branch merge history"))
- Add CRUD application to ViewList Component ([crud-viewList-branch](https://github.com/JustenMX/ntu-price-cart-app/tree/crud-viewList-branch))

---

Currently Working on:

- Further refactoring of the rest of the states and props
