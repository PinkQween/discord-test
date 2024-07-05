import express from 'express';

const app = express();
const port = process.env.PORT || 80;

try {
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
} catch(err) {
    console.log(err);
}