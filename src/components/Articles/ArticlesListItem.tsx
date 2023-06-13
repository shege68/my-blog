import { Card, CardContent } from '@mui/material'
import './ArticlesListItem.scss'

type Props = {
    id: number
    title: string
    description: string
    image: string
}

const ArticlesListItem = ({ id, title, description, image }: Props) => {
    return (
        <Card className="article" variant="outlined">
            <CardContent>
                <div className="article-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="article-title">{title}</h4>
                <div className="article-description">{description}</div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
