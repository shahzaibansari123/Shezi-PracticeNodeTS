import { Request, Response } from "express";

export const getUsers= (req:Request, res: Response)=>{

    const users: string[]= ["shahzaib, huzaifa", "Fareed", "Taha"]

    res.status(200).json({users})

}