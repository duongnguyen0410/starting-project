import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {

    let modalContent;

    if (isPosting) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                />
            </Modal>
        )
    }

    return (
        <main>
            {modalContent}
            <ul className={classes.posts}>
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </main>
    );
}

export default PostsList;