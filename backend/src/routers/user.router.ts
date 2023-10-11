import {Router} from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
const router = Router();
import async_handler from 'express-async-handler';
import { UserModel } from "../mongoose/user.model";


router.get("/seed", async_handler(
    async (req, res) => {
       const usersCount = await UserModel.countDocuments();
       if(usersCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await UserModel.create(sample_users);
       res.send("Seed Is Done!");
   }
   ))
   
router.post("/login",async_handler(
    async (req,res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email,password})
      
        if(user){
          res.send(generateTokenResponse(user));
        }else{
          res.status(400).send("User name or password is not valid!");
        }
      
      }
));
  
  
  const generateTokenResponse = (user : any) => {
    const token = jwt.sign({
      email : user.email , isAdmin : user.isAdmin
    },"neha" , {
      expiresIn : "30d"
    })
    user.token = token;
    return user;
  }

export default router;

function asyncHandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error("Function not implemented.");
}
