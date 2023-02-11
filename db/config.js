import mongoose from 'mongoose'

const connection = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('DB Connected Successfully!!'))
    .catch((err) => console.log(err));
}

export default connection