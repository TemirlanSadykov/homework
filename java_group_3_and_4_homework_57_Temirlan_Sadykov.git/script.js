'use strict';
//1 задание
console.log('First task');
let user = {
    name: 'Dima',
    surname: 'Ivanovich',
    isAuthorised: false
}

console.log(user);

if(user.isAuthorised == true){
    console.log(user.name + ' is authorised');
}
else{
    console.log(user.name + ' is not authorised');
}


//2 задание
console.log('Second task');

let post = {
    title: 'Its my first post',
    PostsAuthor: user.name
}

console.log(post);


//3 задание
console.log('Third task');

let comment = {
    title: 'Hello world',
    CommentAuthor: user.name,
    CommentForPost: post.title
}

console.log(comment);

//4 задание
console.log('Fourth task');

let posts = [1, 2];
console.log(posts);

function newPosts(somePost){
    for(let i = 3; i <= 7; i++){
        somePost.push(i);
    }
    return somePost;
}

let result = newPosts(posts);
console.log(result);

//5 задание 
console.log('Fifth task');

let user20 = {
    name: 'Sasha',
    isAuthorised: false
}

console.log(user20);

function isNotAuthorised(user){
    if(user.isAuthorised === true){
        delete user.isAuthorised;
        user.isAuthorised = false;
    }
        
    else{
        user.isAuthorised = true;
    }

    return (user);
}

let result20 = isNotAuthorised(user20);
console.log(result20);















