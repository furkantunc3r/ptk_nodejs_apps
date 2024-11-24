const posts = [{
    text: 'First Post',
    createdAt: new Date('2024/10/12')
}, {
    text: 'Second Post',
    createdAt: new Date('2024/11/12')
}];

const addPost = () => {
    posts.push({
        text: 'Third Post',
        createdAt: new Date()
    })

    listPosts();
};

const listPosts = () => {
    posts.forEach(post => {
        console.log(post);
    });
};

addPost();