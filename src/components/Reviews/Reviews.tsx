import React, { FormEvent, useState } from 'react'

import {
    TextInput,
    Textarea,
    Group,
    Title,
    Button,
    Card,
    CardSection,
} from '@mantine/core'

type Props = {}

type Review = {
    name: string
    message: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'John',
            message:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, et accusamus mollitia architecto vel inventore natus eum animi earum officia quos facilis nam esse ullam numquam ipsa rerum amet fugit?',
        },
        {
            name: 'Smith',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque, id eos nam nesciunt magni, veritatis tempora maiores neque voluptates quisquam soluta dolor in optio voluptas officiis totam animi doloribus.',
        },
        {
            name: 'Mary',
            message:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolores doloremque ab tempora maiores praesentium nobis assumenda dolorem consectetur porro voluptate eveniet aliquam corrupti libero, vitae odit laudantium deserunt a?',
        },
    ]

    const [review, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        message: '',
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
            message: e.target.value,
        }))
    }

    const onSend = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.message === '') {
            alert('All fields are requires')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                message: '',
            })
        }
    }

    return (
        <form onSubmit={onSend}>
            <Title order={1} align="center" mt={'xl'}>
                Reviews
            </Title>
            {review.map(({ name, message }, i) => (
                <Card shadow="lg" my={'lg'} radius="md" withBorder key={i}>
                    <CardSection p={'lg'}>
                        <div>{name}:</div>
                        <div>{message}</div>
                    </CardSection>
                </Card>
            ))}
            <Title
                order={2}
                size="h2"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                })}
                weight={700}
                align="center"
            >
                Please leave a review
            </Title>
            <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                value={newReview.name}
                onChange={handleName}
            />

            <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                value={newReview.message}
                onChange={handleText}
            />
            <Group position="center" mt="xl">
                <Button type="submit" size="md" color={'yellow'} mt="sm">
                    Send message
                </Button>
            </Group>
        </form>
    )
}

export default Reviews
