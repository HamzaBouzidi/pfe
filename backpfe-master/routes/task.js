const express = require('express');

const Task = require('../models/Tasks');
const Contributor = require('../models/Contributor');

const router = express.Router();

// This is the route for adding a task

router.route('/addTask')
    .post(async (req, res) => {
        const { user, title, description, state, comment } = req.body;

        const t = new Task({

            user,
            title,
            description,
            contributors:user,
            state,
            comment

        });
        await t.save();
        const cont = new Contributor({ user: t.user, tasks: t._id });
        await cont.save()

            .then(() => {
                res.send('Task created');

            }).catch((err) => {
                res.status(500).send(err);


            });

    });



// This is the route for geting  tasks by user

router.route('/my-tasks/:user')
    .get(async (req, res) => {  
        try {

            const tasks = await Task.find({ user: req.params.user });
            res.json(tasks)
        } catch (err) {
            res.status(500).send(err);

        }

    })





 // This is the route for deleting a task

 router.route('/delete-task/:_id')
 .delete(async(req,res)=>{
     const taskId = req.params._id;
     Task.findOneAndDelete(taskId).then((docs) => {
         res.status(200).send("Task deleted");
     })
         .catch((err) => {
             res.status(500).json({ error: err });
         });
    
 });


// This is the route for updating a task

router.route('/update-task/:_id')
    .put(async (req, res) => {
        const taskId = req.params._id

        const updatedTask = {
            
            state: req.body.state,
        };
        Task.updateOne({ _id: taskId }, updatedTask).then(
            () => {
                res.status(201).json({
                    message: 'Task updated successfully!'
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );

    })



module.exports = router;