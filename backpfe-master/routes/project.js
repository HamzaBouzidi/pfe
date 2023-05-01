const express = require('express');

const router = express.Router();
const Project = require('../models/Projects');
// const multer = require ('multer');
// const mystorage = multer.diskStorage({
//     destination: './Uploads',
//     filename: (req, file , redirect)=>{
//         let date = Date.now();
//         let fl = date + '.' + file.mimetype.split('/')[1];
//         redirect(null,fl);
//         filename = fl;
//     }
// })
// const upload = multer({storage: mystorage});
// router.post('/createproject', upload.any('State') ,async(req, res)=>{
//     try{
//         data = req.body;
//         proj = new Project(data);
//         proj.State = filename ;
//         savedProject = await proj.save();
//         filename = '';
//         res.status(200).send(savedProject)
//     } catch(error) {
//         res.status(400).send(error)
//     }

// })
router.get('/getbyid/:id', async (req,res)=>{
    try{
        project = await Project.findById(req.params.id)
        res.status(200).json(project);

    }catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/createproject', async(req, res)=>{
    try{
        
        const project = await Project.create(req.body );
        res.status(200).json('Project added successfully');
        
    } catch(error) {
        console.log(error.message);
        res.status(404).json({message:error.message})
    }

})


router.get('/allproject', async(req, res)=>{
    try{
        
        projects = await Project.find( );
        res.status(200).send(projects);
        
    } catch(error) {
        res.status(400).send(error)
    }

})

router.delete('/delproject/:id', async (req,res)=>{
    try{
        const _id= req.params.id   
        const deletedProject = await Project.findByIdAndDelete({_id});
        if (deletedProject){
            res.json({
                status:"SUCCESS",
                message:"Project deleted successfully"
            })
        }
        else {
            res.json({
                status:"FAILED",
                message:"Project not deleted Successfully"
            })
        }
        
    }catch (error) {
        res.status(400).send(error)
    }
});


// router.put('/updateproject/:id', async (req,res)=>{
    
//     try{
//         id= req.params.id;
//         newData = req.body;   
//         updated = await Project.findByIdAndUpdate({_id: id} , newData);

//         res.send(updated)
//     }catch (error) {
//         res.send(error)
//     }
// });


router.put('/updateproject/:id', async (req,res)=> {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  });



//   router.route('/delete-student/:id').delete((req, res, next) => {
//     studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.status(200).json({
//           msg: data
//         })
//       }
//     })
//   })
module.exports = router;