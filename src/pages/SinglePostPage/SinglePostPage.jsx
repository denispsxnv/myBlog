import React, { useEffect, useState } from 'react';
import styles from './singlePostPage.module.css'
// import postImg from './postPage.png'
import { useParams } from 'react-router-dom';
import postServices from '../../Services/posts'

const SinglePostPage = (props) => {
    const [post, setPost] = useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        postServices.getPost(id).then(res => setPost(res.data))
    }, [])


    // useEffect(() => {
    //     async function fetchPost(){
    //         try {
    //             const res = await postServices.getPost(id)
    //             setPost(res.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchPost()
    // }, [id]);

    const date = new Date(post.createdAt)
    const options = { day: "numeric", month: "short", year: "numeric" }
    const formDate = date.toLocaleDateString("Ru", options)
    return (
        <article className={styles.post}>
            <h1 className={styles.title}>{post.title}</h1>
            <img src={post.img} alt="" className={styles.img} />
            <p className={styles.descr}>
                {post.descr}
            </p>
            <p className={styles.date}>{formDate}</p>
        </article>
    );
};

export default SinglePostPage;