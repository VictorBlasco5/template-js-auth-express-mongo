//importamos dependencias de librearías
import express from 'express';
import 'dotenv/config'

const app = express()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})