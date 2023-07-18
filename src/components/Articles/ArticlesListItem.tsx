import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { FavoriteBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toggleLike } from 'redux/likeReducer'
import './ArticlesListItem.scss'
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

type Props = {
    id: number
    title: string
    subheader: string
    description: string
    image: string
    alt: string
    link: string
    avatar: string
}

const ArticlesListItem = ({
    id,
    title,
    subheader,
    description,
    image,
    alt,
    link,
    avatar,
}: Props) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const isLiked = useAppSelector((state) => state.articleLikeState[id])
    console.log('🚀 ~ file: ArticlesListItem.tsx:58 ~ isLiked:', isLiked)

    const dispatch = useAppDispatch()

    return (
        <Card sx={{ maxWidth: 345, margin: '30px 0' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
                        <Link className="link-avatar" to={`${link}`}>
                            {avatar}
                        </Link>
                    </Avatar>
                }
                title={
                    <Link className="link" to={`/article/${id}`}>
                        {title}
                    </Link>
                }
                subheader={subheader}
            />
            <CardMedia component="img" height="194" image={image} alt={alt} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLiked ? (
                        <FavoriteIcon color="error" />
                    ) : (
                        <FavoriteBorder color="error" />
                    )}
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography
                        paragraph
                        component="h3"
                        variant="h5"
                        align="center"
                    >
                        Recipe:
                    </Typography>
                    <Typography paragraph>
                        <ul>
                            <li>2 avocados – peeled, pitted and diced</li>
                            <li>1 1/2 tablespoons fresh lime juice</li>
                            <li>1/4 cup chopped fresh cilantro</li>
                            <li>
                                1/4 cup salsa garlic salt to taste ground black
                                pepper to taste
                            </li>
                            <li>1 (8 ounce) container sour cream</li>
                            <li>1 (1 ounce) package taco seasoning mix</li>
                            <li>
                                4 roma (plum) tomatoes, diced 1 bunch green
                                onions, finely chopped
                            </li>
                            <li>1 (16 ounce) can refried beans</li>
                            <li>2 cups shredded Mexican-style cheese blend</li>
                            <li>
                                1 (2.25 ounce) can black olives – drained and
                                finely chopped
                            </li>
                        </ul>
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ArticlesListItem
