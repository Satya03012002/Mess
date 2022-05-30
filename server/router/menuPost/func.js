import FoodData from "../../schema/foodSchema.js";
import AdminData from "../../schema/adminSchema.js";

export const getMenu = async(req,res)=>{
    console.log("hello")
    try{
        const data = await FoodData.find()
        console.log("hello")
        console.log(data);
        if(data){
            return  res.status(200).json(data);
        }
        else{
            return  res.status(201).json({"message" : "no menu is present"});
        }


    }catch(err){
        return  res.status(404).json({"message":err});
    }
} 

export const addMenu = async(req,res)=>{ // because admin ka schema me hamesha food ak ek hi id save hoga jo updated hoga

    try{
        const id = req.params.id;
        const {Sunday,Monday,Tuesday,Wednesday,Thrusday,Friday,Saturday} = req.body;
        
        const register = await new FoodData({user:id,Sunday,Monday,Tuesday,Wednesday,Thrusday,Friday,Saturday})
       

       
        

        if(register){
            const data = await register.save();
            
             await  AdminData.findByIdAndUpdate(id,{
                menu : register._id
            },
            {
                new:true
            });
            
            return res.status(200).json(data);
        }else{
            return  res.status(201).json({message:"menu not added"});
        }


    }catch(err){
        return  res.status(404).json({"message":err});
    }
    
}

export const updateMenu = async(req,res)=>{
    try{
        const id = req.params.id; // ye id user ka hai

        const admin = await AdminData.findById(id)

        console.log(admin.menu)

        const {Sunday,Monday,Tuesday,Wednesday,Thrusday,Friday,Saturday} = req.body;
              
        const data = await FoodData.findByIdAndUpdate( admin.menu ,{
            Sunday,Monday,Tuesday,Wednesday,Thrusday,Friday,Saturday
        },{
            new:true
        })
        console.log(data);
        if(data){
            res.status(200).json({data});

        }
        else{
            res.status(203).json({"message": "menu not created"});
        }

        

        

        


    }catch(err){
        return  res.status(404).json({"message":err});
    }
}
 export const deleteMenu = async(req,res)=>{


    try{
        
    const id = req.params.id; // ye id user ka hai

    const admin = await AdminData.findById(id)

    if(admin){
        const data = await FoodData.findByIdAndDelete(admin.menu);
        const user = await FoodData.findByIdAndUpdate(id,{
            menu:null
        })
        return res.status(200).json({message:"menu deleted"})

    }else{
        return res.status(201).json({message:"admin id doesnot exist"})

    }
    
    }catch(err){
        return res.status(404).json({err});
    }

 }






