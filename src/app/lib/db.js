
const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
//console.log("MONGO_USERNAME:", MONGO_USERNAME);
//console.log("MONGO_PASSWORD:", MONGO_PASSWORD);

export const connectionStr = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.33luy.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0`;
