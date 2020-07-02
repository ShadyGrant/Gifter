import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import PostForm from "./PostForm";


const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <h2>Posts</h2>

            <Button className="newPost" onClick={toggle}>New Post</Button>

            <ul className="posts">
            <div className="row justify-content-center">
                <div class="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Post
                </ModalHeader>
                <ModalBody>
                    <PostForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )}
 
 

export default PostList;