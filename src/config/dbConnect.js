// config/dbConnect.js
import mongoose from 'mongoose';

const conectaDataBase = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://contatopaulohn:<password>@sosrecife.3lr2kni.mongodb.net/?retryWrites=true&w=majority&appName=SOSRecife';
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default conectaDataBase;
