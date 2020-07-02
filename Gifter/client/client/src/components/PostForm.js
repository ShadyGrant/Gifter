import { PostContext } from "../providers/PostProvider"
import React, { useContext, useRef } from "react"



export default props => {
    const { addPost } = useContext(PostContext)

    const title = useRef()
    const imageUrl = useRef()
    const caption = useRef()
    const userProfileId = useRef()
    const dateCreated = useRef()

    // Function to create an object and save it to the API
    const constructNewPost = () => {
        const newPostObj = {
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            userProfileId: userProfileId.current.value,
            dateCreated: dateCreated.current.value,
        }
        console.log(newPostObj)
        // and save it to the API.
        addPost(newPostObj).then(props.toggler)
    }
    return (
        <form className="postForm">

            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        ref={title}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post Title"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">imageUrl: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        ref={imageUrl}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="ImageUrl"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption: </label>
                    <input
                        type="text"
                        id="caption"
                        ref={caption}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Caption"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="userProfileId">User Profile Id: </label>
                    <input
                        type="text"
                        id="userProfleId"
                        ref={userProfileId}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="UserProfileId"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="dateCreated">Date Created: </label>
                    <input
                        type="date"
                        id="dateCreated"
                        ref={dateCreated}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="DateCreated"
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewPost()
                    }
                }
                className="btn btn-primary">
                Save Post
            </button>
        </form>
    )
}

