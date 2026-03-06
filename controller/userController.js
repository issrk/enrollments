//SQL
const connection=require('../config/db');

//Get all enrollments
exports.getAllUsers=(req,res)=>{

    connection.query('SELECT * FROM enroll',(err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};  

 

exports.getUserById=(req,res)=>{
    const id=req.params.id;  
    connection.query('SELECT * FROM enroll WHERE id=?',[id],(err,rows,fields)=>{
        if(err) throw err;
        res.json(rows);
    });
    };  

exports.createUser=(req,res)=>{
    const {id,fullName,course,yearLevel,email,dateEnrolled}=req.body;  
    connection.query('INSERT INTO enroll (id,fullName,course,yearLevel,email,dateEnrolled) VALUES (?,?,?,?,?,?)',[id,fullName,course,yearLevel,email,dateEnrolled],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
}
exports.updateUser=(req,res)=>{
    const {id,fullName,course,yearLevel,email,dateEnrolled}=req.body;
    connection.query('UPDATE enroll SET fullName=?, course=?, yearLevel=?, email=?, dateEnrolled=? WHERE id=?',[fullName,course,yearLevel,email,dateEnrolled,id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message:'User not found'});
    });
}


exports.deleteUser=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM enroll WHERE id=?',[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User deleted successfully'});
        else
            res.status(404).json({message:'User not found'});
    });
}