import { v4 } from "uuid";
import { Tweet } from "./tweet";

export class User {
    public id: string;
    public tweets: Tweet[];
    public seguindo: User[];

    constructor(
        public nome: string,
        public email: string,
        public senha: string
    ) {
        this.id = v4();
        this.tweets = [];
        this.seguindo = [];
    }

    public sendTweet(conteudo: string) {
        const tweet = new Tweet(conteudo, "N", this);

        this.tweets.push(tweet);

        return tweet;
    }

    public showTweets() {
        this.tweets.map((tweet) => {
            tweet.show();
        });
    }

    public follow(user: User) {
        this.seguindo.push(user);
    }
}
