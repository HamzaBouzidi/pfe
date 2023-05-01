const express = require('express');

const Task = require('../models/Tasks');
const User = require('../models/Users');
const Contributor = require('../models/Contributor');
const router = express.Router();

// This is the route for adding a contributor 

router.route('/addcontributortotask/:Task')
    .post(async (req, res) => {

        try {

            const { Task } = req.params;
            const t = await Task.findOne({ Task });

            // Find the user to be added as a contributor
            const { email } = req.body;
            const userToAdd = await User.findOne({ email });

            // Check if the user is already a contributor to the task
            if (existingContributor) {
                console.log('User is already a contributor to the task');
            } else {

                // Create a new contributor for the user and add them to the task's list of contributors
                const newContributor = new Contributor({
                    user: userToAdd._id,
                    tasks: [t._id],
                });
                await newContributor.save();
                t.contributors.push(newContributor._id);
                await t.save();
                console.log('User added as a contributor to the task');
            }

        } catch (error) {

            console.error(error);
            res.status(500).send({ message: 'Internal server error' });

        }



    })