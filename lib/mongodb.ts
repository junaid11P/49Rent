import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || '49rent';
const collectionName = process.env.MONGODB_COLLECTION || 'users';
const options = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!globalThis.__mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalThis.__mongoClientPromise = client.connect();
  }
  clientPromise = globalThis.__mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb() {
  const mongoClient = await clientPromise;
  return mongoClient.db(dbName);
}

export async function getUsersCollection() {
  const db = await getDb();
  return db.collection(collectionName);
}

export default clientPromise;

declare global {
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}
