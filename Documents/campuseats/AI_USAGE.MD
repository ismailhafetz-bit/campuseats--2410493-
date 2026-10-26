# AI usage log

## Week 1

- **Tool(s): Claude
- **What I asked for:** I pasted error messages into Claude and asked for help understanding and fixing them. The errors included a GitHub permission error (403) because access was denied to the `MAXWERNAN` account, and a Vite import error in `App.jsx` because the file `./assets/hero.png` could not be resolved.
- **What I kept, changed or rejected, and why:** I used Claude's troubleshooting guidance to understand the GitHub authentication problem and investigate the missing image import in my React project. I followed the relevant suggestions to help identify the causes of the errors.
- **One thing the AI got wrong and how I fixed it:** Claude helped me investigate the errors, but I needed to check the suggestions against my actual project setup. The GitHub error indicated that Git was using the `MAXWERNAN` account, which did not have permission to push to my repository. The Vite error pointed to an image path that could not be resolved. I used these error messages to identify what needed to be checked and corrected.

## Week 2
Tool(s): ChatGPT

- **What I asked for:** I asked ChatGPT to help me connect the vendor selection and menu components in App.jsx. I needed help understanding how selectedVendor changes when a VendorCard is clicked and how the selected vendor's menu is displayed using <MenuList items={selectedVendor.menu} />. Later, I asked for help connecting the Add to cart button to the cart count across MenuItemCard.jsx, MenuList.jsx, App.jsx, and Header.jsx.

- **What I kept, changed or rejected, and why:** I kept the suggested code that connected the components. For example, I used onAdd={onAdd} in MenuList.jsx to pass the callback to MenuItemCard.jsx, and onClick={() => onAdd(item)} in MenuItemCard.jsx to send the selected item back to App.jsx. I also used <Header cartCount={cart.length} /> so the header could display the current cart count instead of a fixed value. I tested the application in the browser and confirmed that switching vendors changed the displayed menu and clicking Add to cart increased the count.

- **One thing the AI got wrong and how I fixed it:** During an earlier change, an import error occurred because MenuList.jsx did not provide a default export. I corrected this by ensuring the file ended with export default MenuList, which allowed App.jsx to import the component successfully.

## week 3 

## Week 3

- **Tool(s):** ChatGPT

- **What I asked for:** I followed the lab sheet for the required tasks. I used ChatGPT for example code for the additional Favourite items feature and help with debugging and CSS issues.

- **What I kept, changed or rejected, and why:** I added two state variables in `App.jsx` to store favourite item IDs and control the Favourites only filter.

  ```jsx
  const [favourites, setFavourites] = useState([])
  const [favouritesOnly, setFavouritesOnly] = useState(false)
  ```

  I added a function to add or remove items from favourites.

  ```jsx
  function handleToggleFavourite(itemId) {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(itemId)
        ? currentFavourites.filter((id) => id !== itemId)
        : [...currentFavourites, itemId]
    )
  }
  ```

  I added filtering to display only favourite items when the checkbox is selected.

  ```jsx
  const displayedItems = selectedVendor
    ? selectedVendor.menu.filter(
        (item) => !favouritesOnly || favourites.includes(item.id)
      )
    : []
  ```

  In `MenuList.jsx`, I passed the favourite status and toggle function to `MenuItemCard.jsx`.

  ```jsx
  <MenuItemCard
    key={item.id}
    item={item}
    isFavourite={favourites.includes(item.id)}
    onToggleFavourite={onToggleFavourite}
  />
  ```

  In `MenuItemCard.jsx`, I added a button to add or remove an item from favourites.

  ```jsx
  <button onClick={() => onToggleFavourite(item.id)}>
    {isFavourite ? "★ Remove favourite" : "☆ Add favourite"}
  </button>
  ```

  I also replaced `src/index.css` with the supplied `campuseats-starter.css` to follow the lab instructions.

- **One thing the AI got wrong and how I fixed it:** The Favourite items feature caused an error because `favourites` was undefined in `MenuList.jsx`. I fixed it by passing the `favourites` array from `App.jsx` and setting an empty array as the default prop value.

  ```jsx
  function MenuList({ items, favourites = [], onToggleFavourite, onAdd }) {
    // Render menu items here
  }
  ``'