import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB for Product API');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

export default mongoose.connection;

