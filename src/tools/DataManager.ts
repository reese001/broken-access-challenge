import { MongoClient, Db, Collection, FindCursor } from "mongodb";

// MongoDB constants
const MONGO_URL:string = "mongodb://mongo:27017/";
const MONGO_DB_NAME:string = "dbTechs";	
const MONGO_COLLECTION_TECHS:string = "technologies";

export async function getTechnologies() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    try {
        // make connection to mongoDB server (ASYNC task)
        await mongoClient.connect();
        // get reference to database via name
        let db:Db = mongoClient.db(MONGO_DB_NAME);


    
    } catch (error:any) {
        console.log(`>>> DB ERROR : ${error.message}`);
        throw error;
    } finally {
        mongoClient.close();
    }

    return null;
}