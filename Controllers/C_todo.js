const MywayModel = require('../Models/card');



const createTodo = async(req,res) => {

    try {
        
        const {title, description} = req.body;

        if (!title || !description) {
            return res.status(400).send({message : `Something u are missing`});
        }

        const titleexists = await MywayModel.findOne({title});

        if (titleexists) {
            return res.status(400).send({message : `Title with this name is already exists!`});            
        }

        const created = await new MywayModel({
            title,
            description
        }).save();

        return res.status(200).send({message : `Your message added successfully`, created});

    } catch (error) {
     console.log(error);   
    }
} 



const displayTodo = async(req,res) => {
    try {
        
        const display = await MywayModel.find();

        if (!display) {
            return res.status(400).send({message : `No message found`});
        }

        return res.status(200).send(display);


    } catch (error) {
     console.log(error);   
        
    }
} 


const displaySingleTodo = async(req,res) => {
    try {

        const _id = req.params.id;
        console.log(_id);
        const single = await MywayModel.findById(_id);

        if (!single) {
            return res.status(400).send({message : `No message found`});
        }

        const final = await MywayModel.find({});

        return res.status(200).send(final);


        
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async(req,res) => {

    try {
        
        const id = req.params.id;
        const update_todo = await MywayModel.findById(id);

        if (!update_todo) {
            return res.status(400).send({message : `No message found`});            
        }

        const card = {
            title: req.body.title, 
            description: req.body.description
        }

        const final = await MywayModel.findByIdAndUpdate(update_todo, card, {new:true})

        return res.status(200).send({message : `Your message Updated successfully`, final});            


    } catch (error) {
     console.log(error);   
        
    }
} 


const deleteTodo = async(req,res) => {

    try {
    
        const _id = req.params._id;
        console.log(_id);
        const delete_todo = await MywayModel.findById(_id);

        if (!delete_todo) {
            return res.status(400).send({message : `No message found`});            
        }

        await MywayModel.findByIdAndDelete(delete_todo)

        return res.status(200).send({message : `Your message Deleted successfully`});            
        
    } catch (error) {
     console.log(error);   
        
    }
} 


module.exports = {createTodo, displayTodo, displaySingleTodo,updateTodo, deleteTodo}