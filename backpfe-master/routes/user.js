const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





// ----------------------------------------- Auth by Hamza ---------------------------------------//

// Register Function

router.post("/register", async (req,res)=>{

  // Get user input
  const { userName, email, password,role } = req.body;

  // Validate user input
  if (!(email && password && userName,role)) {
    res.status(400).send("All inputs are required");
  }


  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await user.findOne({ email });

  if (oldUser) {
    return res.status(409).send("User Already Exists. Please Login");
  }


  // hashed password
  var hashedPassword = await bcrypt.hash(req.body.password, 10)

  user.create(

    {
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role

    }
  ).then(newUser => {

    res.status(200).json({
      message: " User Added Successfully!", newUser
    });

  }).catch(err => {
    res.status(500).json({ error: err });
  });


})

// Login Function


router.post("/login", async (req, res) => {

  // Validate if user exist in our database

  const User = await user.findOne({ email: req.body.email });

  //Token creation
  const token = jwt.sign({ User }, 'privateKey', { expiresIn: '10h' })


  if (!User) return res.status(404).send({ message: "Invalid Email!" })
  let id = User._id
 

  const validPass = await bcrypt.compare(req.body.password, User.password)
  if (!validPass) return res.status(400).send({ message: "Invalid Password!" })

  const UserStatus = User.activated
  const role = User.role

  if (UserStatus == "OFF") {

    return res.status(201).send({ message: "Admin didn't activated your account yet!", token, UserStatus, id });

  } else if (UserStatus == "ON") {
    return res.status(200).send({ message: "Welcome again", token, UserStatus, id,role })

  } 




})

// get Users List
router.get("/", async (req, res) => {

  try {
    const users = await user.find(); 
    res.json(users); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
})

// Activate Function 


router.patch("/activate/:id", async (req, res) => {

  try {
    const userToUpdate = await user.findById(req.params.id);
    if (!userToUpdate) {
      return res.status(404).send("User not found");
    }
    userToUpdate.activated = "ON";
    await userToUpdate.save();
    res.status(200).send("User activated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }


})

// Activate Function 


router.patch("/block/:id", async (req, res) => {

  try {
    const userToUpdate = await user.findById(req.params.id);
    if (!userToUpdate) {
      return res.status(404).send("User not found");
    }
    userToUpdate.activated = "OFF";
    await userToUpdate.save();
    res.status(200).send("User blocked");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }


})

// Delete User

router.delete("/delete/:id", async (req, res) => {

  try {
   
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }



})





//-------------------------------------------------------------------------------------------------------//

// router.get("/users", async (req,res)=>{
//     const users = await UserModel.find();
//     res.json(users)
// })
// router.post("/createUser", async (req,res)=> {
//     const newUser = new UserModel(req.body);
//     await newUser.save();
//     res.json(req.body)
// })


// router.post("/register", async (req,res)=>{
//     const {username,role,email,password} = req.body
//     const user = await UserModel.findOne({email})      
//     user && res.json({message: "User already exists !"})  
//     const hashedPassword = bcrypt.hashSync(password , 10)  
//     const newUser = new UserModel({username ,role,email,password : hashedPassword
//     });
//     await newUser.save();
//     return res.json({message: "User created successfully"})
// })


// router.post("/login", async (req,res)=>{

//     const {email,password} = req.body
//     const user = await UserModel.findOne({email})   
  
//     !user && res.status(409).send( "User doesn't exist !") 
//     const isPasswordValid = await bcrypt.compare(password , user.password)
//     !isPasswordValid && res.status(404).send("Email or Password is not correct !");
//     res.status(200).send("Login successful");
     
//     const token = jwt.sign({id:user._id},"jihen")
//     return res.json({token,userID:user._id})
 

// })


//!isPasswordValid && res.json({message: "Email or Password is not correct !"})  
  
//   router.get('/all', async (req, res) => {
//     try {
//       const users = await UserModel.find({email});
//       res.status(200).json(users);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
  
// });

// router.get('/forgotpassword', async (req, res) => {
//   const {email} =req.body;
  
//   try {
//     const oldUser = await UserModel.findOne({email});
//     if(!oldUser){
//       return res.send("User Not Exists !");
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     const token =jwt.sign({email:oldUser.email,id:oldUser._id},secret,{
//       expiresIn: "5m",
//     });
//     const link = `http://localhost:3000/user/reset-password/${oldUser._id}/${token}`;
//     console.log(link);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }

// });
// router.get("/reset-password/:id/:token",async(req,res) =>{
//   const {id,token} =req.params;
//   console.log(req.params);
//   const oldUser= await UserModel.findOne({_id:id});
//   if(!oldUser){
//     return res.json({status: "User Not Exists !"});
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try{
//     const verify = jwt.verify(token,secret);
//     res.send("Verified");
//   } catch(error){
//     res.send('Not verified');
//   }
//   res.send("Done");
// })




    

module.exports = router;