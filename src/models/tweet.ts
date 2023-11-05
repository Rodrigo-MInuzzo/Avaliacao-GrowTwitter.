import { v4 } from "uuid";
import { User } from "./user";

export class Tweet {
    public id: string;
    public likes: User[];
    public replies: Tweet[];

    constructor(
        public conteudo: string,
        public tipo: string,
        public user: User
    ) {
        this.id = v4();
        this.likes = [];
        this.replies = [];
    }

    public show() {
        console.log(`@${this.user.nome}: ${this.conteudo}`);
        this.showLikes();
        this.showReplies();

        console.log("\n");
    }

    private showReplies() {
        this.replies.map((tweet) => {
            console.log(`  > @${tweet.user.nome}: ${tweet.conteudo}`);
        });
    }

    private showLikes() {
        const qtdLikes = this.likes.length;

        if (qtdLikes == 1) {
            console.log(`  - @${this.likes[0].nome} curtiu isso`);
        } else if (qtdLikes == 2) {
            console.log(`  - @${this.likes[0].nome} e mais 1 usuario curtiu`);
        } else if (qtdLikes > 2) {
            console.log(
                `  - @${this.likes[0].nome} e mais ${
                    qtdLikes - 1
                } usuarios curtiram`
            );
        }
    }

    public like(user: User) {
        this.likes.push(user);
    }

    public reply(conteudo: string, user: User) {
        const tweet = new Tweet(conteudo, "R", user);

        this.replies.push(tweet);

        return tweet;
    }
}