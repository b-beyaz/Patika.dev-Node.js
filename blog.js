const myPosts = [
    {
        id: 1,
        title: "Post1",
    },
    {
        id: 2,
        title: "Post2",
    },
    {
        id: 3,
        title: "Post3",
    },
    {
        id: 4,
        title: "Post4",
    },
];

const ListThePost = () => {
    for (i = 0; i < myPosts.length; i++) {
        console.log(myPosts[i]);
    }
};

const addTheNewPost = (newPoststitle) => {
    myPostslength=myPosts.length;
    newPost={id:myPostslength+1,title:newPoststitle};
    myPosts.push(newPost);
    ListThePost();
};

const showThePost = async () => {
    try {
        await addTheNewPost();
        ListThePost();
    } catch (error) {
        console.log(error);
    }
};

addTheNewPost("Post5");
