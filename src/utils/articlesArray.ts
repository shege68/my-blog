export type Articles = {
    id: number
    title: string
    description: string
    image: string
    category?: string
    subheader: string
    alt: string
}

const articlesArray: Articles[] = [
    {
        id: 1,
        title: 'Tales sells all sorts',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant1.jpeg",
        category: 'Restaurant',
        subheader: "January 13, 2023",
        alt:"restaurant"
    },
    {
        id: 2,
        title: 'Jazz Dance Orchestra',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating3.jpeg",
        category: 'Healthy Eating',
        subheader: "January 18, 2023",
        alt:"healthy-eating"
    },
    {
        id: 3,
        title: 'Wake up to a healthy morning',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating4.jpeg",
        category: "Healthy Eating",
        subheader: "January 25, 2023",
        alt:"healthy-eating"
    },
    {
        id: 4,
        title: 'Evening of classical music',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes1.jpeg",
        category: "Recipes",
        subheader: "February 14, 2023",
        alt:"recipes"
    },
    {
        id: 5,
        title: 'Barbecue Cheese & Bacon',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant4.jpeg",
        category:"Restaurant",
        subheader: "February 19, 2023",
        alt:"restaurant"
    },
    {
        id: 6,
        title: '15 Most popular cocktails',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant3.jpeg",
        category:"Restaurant",
        subheader: "February 24, 2023",
        alt:"restaurant"
    },
    {
        id: 7,
        title: 'Everything you need to know about',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating1.jpeg",
        category:"Healthy Eating",
        subheader: "March 10, 2023",
        alt:"healthy-eating"
    },
    {
        id: 8,
        title: 'Chicken-skewers',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating2.jpeg",
        category:"Healthy Eating",
        subheader: "March 17, 2023",
        alt:"healthy-eating"
    },
    {
        id: 9,
        title: 'Free WiFi Coffee Shop',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant2.jpeg",
        category:"Restaurant",
        subheader: "March 28, 2023",
        alt:"restaurant"
    },
    {
        id: 10,
        title: 'Top 99 Restaurants',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant5.jpeg",
        category:"Restaurant",
        subheader: "April 10, 2023",
        alt:"restaurant"
    },
    {
        id: 11,
        title: 'Post Format: Gallary',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating5.jpeg",
        category:"Healthy Eating",
        subheader: "April 20, 2023",
        alt:"healthy-eating"
    },
    {
        id: 12,
        title: '5 Best Outdoor Restaurants',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/restaurant6.jpeg",
        category:"Restaurant",
        subheader: "April 30, 2023",
        alt:"restaurant"
    },
    {
        id: 13,
        title: 'Kinds of fresh food',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/healthy-eating6.jpeg",
        category:"Healthy Eating",
        subheader: "May 01, 2023",
        alt:"healthy-eating"
    },
    {
        id: 14,
        title: 'Baked Garlic Parmesan Chicken',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes2.jpeg",
        category:"Recipes",
        subheader: "May 08, 2023",
        alt:"recipes"
    },
    {
        id: 15,
        title: 'Sunday outdoor cooking',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes3.jpeg",
        category:"Recipes",
        subheader: "June 12, 2023",
        alt:"recipes"
    },
    {
        id: 16,
        title: 'Table decoration trends',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes4.jpeg",
        category:"Recipes",
        subheader: "June 23, 2023",
        alt:"recipes"
    },
    {
        id: 17,
        title: '20 Most unusual dinners',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes5.jpeg",
        category:"Recipes",
        subheader: "July 04, 2023",
        alt:"recipes"
    },
    {
        id: 18,
        title: 'Rosemary Ranch Chicken Kabobs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/recipes6.jpeg",
        category:"Recipes",
        subheader: "July 10, 2023",
        alt:"recipes"
    },
]

export const getProductsObject = (array: Articles[]) => 
    array.reduce(
        (object, product)=> ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default articlesArray