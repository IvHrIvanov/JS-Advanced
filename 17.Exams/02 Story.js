class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        let username = this._likes[0];
        if (this._likes.length === 1) {

            return `${username} likes this story!`;
        }
        return `${username} and ${this.likes.length - 1} others like this story!`;

    }

    like(username) {
        if (this._likes.includes(username)) {
           return "You can't like the same story twice!";
        }
        if (this.creator == username) {
        return "You can't like your own story!";
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;

    }
    dislike(username) {
        if (this._likes.includes(username)) {
            return "You can't dislike this story!";
        }
        return `${username} disliked ${this.title}`;

    }
    comment(username, content, id) {
        if (id === undefined || !this._comments.some(x => x.Id === id)) {
            let newComement = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: [],

            }
            this._comments.push(newComement);
            return `${username} commented on ${this.title}`;
        }
        let commentToReplay = this._comments.find(x => x.Id === id);
        let replayNextId = commentToReplay.Replies.length + 1;
        let replayId = Number(`${commentToReplay.Id}.${replayNextId}`)
        let replay = {
            Id: replayId,
            Username: username,
            Content: content,

        }
        commentToReplay.Replies.push(replay);
        return 'You replied successfully';
    }
    toString(sortingType) {
        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a - b);
            this._comments.forEach(c => c.Replies.sort((a, b) => a - b));
        }
        if (sortingType === 'desc') {
            this._comments.sort((a, b) => b - a);
            this._comments.forEach(c => c.Replies.sort((a, b) => b - a));
        }
        if (sortingType === 'username') {
           this._comments.sort(x=>x.Username);
         this._comments.forEach(x=>x.Replies.sort(x=>x.Username));
        }
      
        let comentsArrCombine = [];
        for (const comment of this._comments) {
            let commentString = `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`
            let replayString = comment.Replies.map(r => `--- ${r.Id}. ${r.username}: ${r.Content}`).join('/n')
            let combineString = `${commentString}\n${replayString}`;
            comentsArrCombine.push(combineString);
        }
        let fullStringComments =  comentsArrCombine.join('\n');
        return `Title: ${this.title}
        Creator: ${this.creator}
        Likes: ${this.likes.length}
        Comments: ${fullStringComments}`;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
