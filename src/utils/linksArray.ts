export type Links = { link: string; label: string; links?: { link: string; label: string }[] }[]

const linksArray: Links = [
    {
      link: "/",
      label: "Home"
    },
    
    {
      link: "/about",
      label: "About"
    },
    {
      link: "/contact",
      label: "Contact"
    },
   
    {
      link: "#",
      label: "Category",
      links: [
        {
          link: "/book-of-recipes",
          label: "Book-recipes"
        },
        {
          link: "/restaurant",
          label: "Restaurant"
        },
        {
          link: "/healthy-eating",
          label: "Healthy Eating"
        },
      ]
    },
    {
      link: "/favorites",
      label: "Favorites"
    },
  ]

  export default linksArray