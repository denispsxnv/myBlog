
import React, { useEffect, useState } from 'react';
import Post from '../../componets/Post/Post';
import styles from './postPage.module.css'
import postService from "../../Services/posts"



const PostPage = () => {
    const [ posts, setPosts] = useState([])
    useEffect(() => {
        postService.get().then(res => setPosts(res.data))
    }, [])
   
   
    console.log(posts)
    return (
        <section className={styles.posts}>
            {
                posts.map(post => {
                    console.log(post)
                    return (
                        <Post
                            key={post._id}
                            img={post.img}
                            title={post.title}
                            descr={post.descr}
                            date={post.createdAt}
                            id={post._id}
                        />
                    )
                })
            }
        </section>
    );
};

export default PostPage;