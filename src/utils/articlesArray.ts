export type Articles = {
    id: number
    title: string
    description: string
    image: string
}

const articlesArray: Articles[] = [
    {
        id: 1,
        title: 'Tales sells all sorts',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/reataurant-240155.jpeg"
    },
    {
        id: 2,
        title: 'Jazz Dance Orchestra',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/young-woman-with-her-morning-fresh.jpeg"
    },
    {
        id: 3,
        title: 'Wake up to a healthy morning',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/edward-franklin-72304.jpeg"
    },
    {
        id: 4,
        title: 'Evening of classical music',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/edward-franklin-72304.jpeg"
    },
    {
        id: 5,
        title: 'Barbecue Cheese & Bacon',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/brooke-lark-93583.jpeg"
    },
    {
        id: 6,
        title: '15 Most popular cocktails',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci',
        image: "/images/kirsty-hughes-109630.jpeg"
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