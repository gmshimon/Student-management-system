import express, { Application, NextFunction, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


export default app;