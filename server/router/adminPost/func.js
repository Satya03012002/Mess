import AdminData from "../../schema/adminSchema.js";
import AnnouncementData from "../../schema/announcementSchema.js";

import bcrypt from 'bcrypt'


export const getAllAdmin = async(req,res)=>{
    try{
        const allUserData = await AdminData.find().populate('Announcement').populate('menu')
        if(allUserData){
            return res.status(200).json({allUserData});
        }else{
            return res.status(201).json({message:"no user found"})
        }

    }catch(err){
        return res.status(404).json({err});
    }
}

export const loginData = async(req,res)=>{
     try{
        const {email,Password} = req.body;
        console.log(req.body)

        const data = await AdminData.findOne({email});
        console.log(data)
        if(data){
            
            const checkPassword = await bcrypt.compare(Password, data.Password);

            
            if(checkPassword){
                console.log("login successfuly")
                res.status(200).json({message:"login successfully"});
            }else{
                res.status(201).json({message:"invalid password"});
            }

           
        }else{
           
            res.status(202).json({message:"account doesnot exist"});

        }


    }catch(err){
        return res.status(404).json({err});
    }
}

export const signUpData = async(req,res)=>{

    try{
        const {FirstName, LastName, HostelName, Password,Conformpassword, email} = req.body;
        console.log(req.body);
        console.log(Conformpassword);
        console.log(Password);

        if(Conformpassword ==  Password){
            console.log("hello")
            const hashPassword = await bcrypt.hash( Password,10);
            console.log("hello")
            console.log(hashPassword)
            const result = await AdminData.findOne({email});
            if(!result){
                const register = new AdminData({FirstName,LastName,HostelName,Password:hashPassword, Conformpassword:hashPassword,email,Announcement:[],user:[]});
                console.log(register);
                console.log("signUp ho gya");;
                await register.save();
                return res.status(200).json({register,message:"signUp successfuly"})

            }else{
                return res.status(201).json({message:"account already exist"});

            }

        }else{
            return res.status(202).json({message:"invalid User Detail"});
        }


    }catch(err){
        return res.status(404).json({err});

    }




}

 export const addAnnounce = async(req,res)=>{
    try{
        const _id = req.params.id;
        const { announce} = req.body;
        console.log(announce);

        const data = await  new AnnouncementData({announce,user:_id});
        console.log(data);
        if(data){
            await data.save();
            await AdminData.findByIdAndUpdate(_id,{
                $push:{
                    Announcement:data._id
                }
            })
            res.status(200).json({message:"add ho announcement"});



        }else{
            res.status(400).json({message:"unable to add announcement"})
        }



    }catch(err){
        return res.status(404).json({err})
    }
    

}

export const getAllUser =  async(req,res)=>{
    try{

         const id = req.params.id;
         const data = await AdminData.findById(id).populate('user');
         if(data){
             return res.status(200).json(data.user);

         }else{
            return res.status(201).json({message:"no user found"});
         }





    }catch(err){
        return res.status(404).json({err})   

    }
}





