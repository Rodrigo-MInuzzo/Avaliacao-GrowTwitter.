import { users } from "./database/users";

const rodrigo = users[0];
const jose = users[1];
const maria = users[2];

// 1 - Criar tweets
const tweetOla = rodrigo.sendTweet("Ola!!");
const tweetPassear = rodrigo.sendTweet("Vou passear");
rodrigo.sendTweet("bora tomar uma!");

// 3 - Seguir outros usuarios
rodrigo.follow(jose);
rodrigo.follow(maria);
rodrigo.follow(rodrigo);

// 4 - Likes em tweets
tweetPassear.like(maria);
tweetPassear.like(jose);
tweetPassear.like(rodrigo);

// 5 - Replies em tweets
tweetOla.reply("Ola tudo bem", maria);
tweetOla.reply("Como esta??", maria);
tweetPassear.reply("Eu tbm vou!!",jose);

// 2 - Exibir os tweets do usuario
rodrigo.showTweets();
