//  Start coding here
class User {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    sharePost(post) {
        console.log(`You've shared post "${post.title}" to your friend.`);
    }
}

class Post {
    constructor(id, title, content,){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comment){
        this.comments.push(comment);
    }
}

class Comment{
    constructor(id, content, createdBy,){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike(){
        this.like += 1;
    }
}

class Facebook {
    constructor(){
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(page){
        this.pageList.push(page);
    }
}

class FacebookPage {
    constructor(name){
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name){
        this.name = name;
    }
}

class Notification {
    constructor(id, commentCreatedBy, postTitle) {
        this.id = id;
        this.commentCreatedBy = commentCreatedBy;
        this.postTitle = postTitle;
    }

    send() {
        console.log(`Notification: ${this.commentCreatedBy} has just commented on this post—"${this.postTitle}"`);
    }
}