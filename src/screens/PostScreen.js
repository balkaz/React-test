import React, { useState, useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Auth } from '../context/AuthContext';
import PostCard from '../components/PostCard';

const PostScreen = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();

    const { user } = useContext(Auth);
  
    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
    }

    useEffect(() => {
        if(user) {
            fetchPosts();
        } else {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <Container>
            <h1 className='mt-4' >Posts</h1>
            <Row className='mt-4'>
                {loading ? (
                    <h1>Loading...</h1>
                ) : 
                    <>
                        {posts.map((post) => (
                            <Col md={4} sm={6} xs={12} key={post.id}>
                                <PostCard post={post} />
                            </Col>
                        ))}
                    </>
                }
            </Row>
        </Container>
    );
}

export default PostScreen;