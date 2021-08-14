function lazyImageLoader(e) {
  e.classList.add("loaded");
}

// Handle Sidebar Toggle
const sidebar = document.querySelector("#sidebar");
document.querySelector("#menu-button").addEventListener("click", () => {
  if (!sidebar.classList.contains("opened")) {
    sidebar.classList.add("opened");
  }
});
document.querySelector("#close-menu-button").addEventListener("click", () => {
  if (sidebar.classList.contains("opened")) {
    sidebar.classList.remove("opened");
  }
});

// Handle Mobile Mode Searchbar
const searchBarMb = document.querySelector(".search-box-mb");
searchBarMb.querySelector(".icon").addEventListener("click", () => {
  if (!searchBarMb.classList.contains("opened")) {
    searchBarMb.classList.add("opened");
  }
});
searchBarMb.querySelector("#close-search-box-mb-button").addEventListener("click", () => {
  if (searchBarMb.classList.contains("opened")) {
    searchBarMb.classList.remove("opened");
  }
});
