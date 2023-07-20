import { IconBook, IconCoffee, IconHealthRecognition } from "@tabler/icons-react";

export type Links = { icon: any, title: string, link: string, description: string}[]

const linksArray: Links = [
  {
    icon: IconBook,
    title: 'Book-recipes',
    link: '/book-of-recipes',
    description: 'Cook for health with a recipe book',
},
{
    icon: IconCoffee,
    title: 'Restaurant',
    link: '/restaurant',
    description: 'Welcome to our restaurant with the best menu!',
},
{
    icon: IconHealthRecognition,
    title: 'Healthy Eating',
    link: '/healthy-eating',
    description: 'Healthy food is a guarantee of a healthy life!',
},
  ]

  export default linksArray