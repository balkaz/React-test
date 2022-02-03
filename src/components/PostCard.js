import React from 'react';
import { Card } from 'react-bootstrap';


const PostCard = ({ post }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PostCard;