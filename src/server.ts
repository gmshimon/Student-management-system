import mongoose from 'mongoose';
import app from './app'
const port:number = 5000
//Database connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student-management-system');
        console.log(`Database connection established`);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(`Failed to connect to Mongoose`, error.message);
    }
}
main();