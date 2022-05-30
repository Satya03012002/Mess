import UserData from "../../schema/userSchema.js";
import bcrypt from 'bcrypt'
import AdminData from "../../schema/adminSchema.js";
import FoodData from "../../schema/foodSchema.js";

export const getAllUser = async(req,res)=>{
    try{
        console.log("hello")
        const data = await UserData.find().populate('menu')
        console.log("hellodata")
        if(data){
            console.log(data)
            return res.status(200).json(data);
        }else{
            return res.status(201).json({message:"no student found"});
        }

    }catch(err){
        return res.status(404).json({"message":err});
    }
    
}
export const loginUser = async(req,res)=>{
    try{

        const {email,Password} = req.body;
        const data = await UserData.findOne({email});
        if(data){
            const check = await bcrypt.compare(Password, data.Password);
            if(check){
                return res.status(200).json({message:"logged successfully"})
            }else{
                return res.status(201).json({message:"invalid password"});
            }
        }else{
            return res.status(202).json({message:"no user found"});
        }
    }catch(err){

        return res.status(404).json({"message":err});

    }
}

export const signUpUser = async(req,res)=>{
    try{
        const{FirstName,LastName, HostelName,BlockName,RoomNo,EnrolmentNo,Password,Conformpassword,email,adminId} = req.body;
        if(Password == Conformpassword){
            const hashPassword = await bcrypt.hash(Password,10);

            const result = await UserData.findOne({email});
            if(!result){
                const data = await  new UserData({FirstName,LastName, HostelName,BlockName,RoomNo,EnrolmentNo,Password : hashPassword ,Conformpassword : hashPassword ,  email,menu:adminId});
                await data.save();
                await AdminData.findByIdAndUpdate(adminId,{
                    $push:{
                        user : data._id
                    }
                })
                console.log("id add ho gya")
                console.log("signUp ho gya");
                return res.status(200).json({data});

            }else{
                return res.status(201).json({message:"user account already exist"});
            }

           
        }
        else{
            return res.status(202).json({message:"invalid detail"});
        }

        
       

    }catch(err){
        return res.status(404).json({"message":err});
    }
}

export const getById = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await UserData.findById(id).populate('menu');
        if(data){
            return res.status(200).json(data);

        }else{
            return res.status(201).json({message:"data not found"});

        }

    }catch(err){
        return res.status(404).json({"message":err});

    }
}

export const like = async(req,res)=>{
    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
     

        const data = await UserData.findById(id);
        // console.log(data);
        // console.log(data.menu);
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
        // const obj = ob.Like


           const found = obj.Like.find(element => element._id == id);
           console.log(found)
            if(!found){
                // console.log(obj)
                obj.Like.push(id);

                await result.save()
                return res.status(200).json("liked")

            }else{
                    return res.status(201).json("not updated")
                }
            

            

            



        
        //  const update =  await FoodData.findAndModify({query:{_id:data.menu,daykey:day,key:1},update:{

        //     // $push:{
        //     //    Like: id
        //     // }
        //    $set: {
        //     menu:"hello"
        //     }
          

           
            
        // },new:true})

    

        // if(result){
        //     console.log(obj)
          
            
        //     return res.status(200).json("liked")
        // }else{
        //     return res.status(201).json("not updated")
        // }

       
        


         
            
       




    }catch(err){
        return res.status(404).json({"message":err});

    }
}


export const unlike = async(req,res)=>{
    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
     

        const data = await UserData.findById(id);
        // console.log(data);
        // console.log(data.menu);
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
        // const obj = ob.Like


           const found = obj.Like.find(element => element._id == id);
           console.log(found)
            if(found){
                // console.log(obj)
                obj.Like.pull(id);

                await result.save()
                return res.status(200).json("remove added")

            }else{
                    return res.status(201).json("not updated")
                }
        
    }catch(err){
        return res.status(404).json({"message":err});

    }
}

export const dislike = async(req,res)=>{
    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
     

        const data = await UserData.findById(id);
        // console.log(data);
        // console.log(data.menu);
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
        // const obj = ob.Like


           const found = obj.Dislike.find(element => element._id == id);
           console.log(found)
            if(!found){
                // console.log(obj)
                obj.Dislike.push(id);

                await result.save()
                return res.status(200).json("dislike addedS")

            }else{
                    return res.status(201).json("not updated")
                }
        
    }catch(err){
        return res.status(404).json({"message":err});

    }
}


export const removedislike = async(req,res)=>{
    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
     

        const data = await UserData.findById(id);
        // console.log(data);
        // console.log(data.menu);
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
        // const obj = ob.Like


           const found = obj.Dislike.find(element => element._id == id);
           console.log(found)
            if(found){
                // console.log(obj)
                obj.Dislike.pull(id);

                await result.save()
                return res.status(200).json("dislike removed")

            }else{
                    return res.status(201).json("not updated")
                }
        
    }catch(err){
        return res.status(404).json({"message":err});

    }
}


export const comment = async(req,res)=>{
    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
        const {feedback} = req.body;
     

        const data = await UserData.findById(id);
        // console.log(data);
        // console.log(data.menu);
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
        // const obj = ob.Like


        //    const found = obj.Dislike.find(element => element._id == id);
        //    console.log(found)


            
                // console.log(obj)
                obj.comment.push({feedback, user:id});

                await result.save()
                console.log(obj)
                return res.status(200).json("comment added")

            
        
    }catch(err){
        return res.status(404).json({"message":err});

    }
}

export const rating = async(req,res)=>{


    try{
        const time = req.params.time;
        const day = req.params.day;
        const id = req.params.id;
        const {rating} = req.body;
     
        const data = await UserData.findById(id);
        
        const result = await FoodData.findById(data.menu);

      

        const obj = result[day][time];
       
                obj.Userratings.push({rating,user:id});

                obj.finalrating = parseInt((rating + obj.finalrating)/(obj.comment.length))

                await result.save()
                console.log(obj)
                return res.status(200).json("rating added")

            
        
    }catch(err){
        return res.status(404).json({"message":err});

    }
}


