import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { FormEvent, useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'John',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, et accusamus mollitia architecto vel inventore natus eum animi earum officia quos facilis nam esse ullam numquam ipsa rerum amet fugit?',
        },
        {
            name: 'Smith',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque, id eos nam nesciunt magni, veritatis tempora maiores neque voluptates quisquam soluta dolor in optio voluptas officiis totam animi doloribus.',
        },
        {
            name: 'Mary',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolores doloremque ab tempora maiores praesentium nobis assumenda dolorem consectetur porro voluptate eveniet aliquam corrupti libero, vitae odit laudantium deserunt a?',
        },
    ]

    const [review, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are requires')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Reviews
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card variant="outlined" sx={{ margin: '30px 0' }} key={i}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Reviews
