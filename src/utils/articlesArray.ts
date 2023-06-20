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
        image: "/images/reataurant-240155.jpeg",
        category: 'Book of Recipes',
        subheader: "September 14, 2016",
        alt:"Paella dish"
    },
    {
        id: 2,
        title: 'Jazz Dance Orchestra',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/young-woman-with-her-morning-fresh.jpeg",
        category: 'Book of Recipes',
        subheader: "September 14, 2016",
        alt:"Paella dish"
    },
    {
        id: 3,
        title: 'Wake up to a healthy morning',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/adam-jaime-119568.jpeg",
        category: "Fresh Food",
        subheader: "September 14, 2016",
        alt:"Paella dish"
    },
    {
        id: 4,
        title: 'Evening of classical music',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/edward-franklin-72304.jpeg",
        category: "Fresh Food",
        subheader: "September 14, 2016",
        alt:"Paella dish"
    },
    {
        id: 5,
        title: 'Barbecue Cheese & Bacon',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/brooke-lark-93583.jpeg",
        category:"Healthy Eating",
        subheader: "September 14, 2016",
        alt:"Paella dish"
    },
    {
        id: 6,
        title: '15 Most popular cocktails',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/kirsty-hughes-109630.jpeg",
        category:"Healthy Eating",
        subheader: "September 14, 2016",
        alt:"Paella dish"
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