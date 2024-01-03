const {Schema, model }= require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const UserSchema = new Schema({
    name :{type :String, required:true},
    email:{type: String, required: true},
    password:{type:String, required: true}

},{
    timestamps: true
});

//metodos para cifrar la contraseña
UserSchema.methods.encrypPasword = async password=>{
    const salt = await bcrypt.genSalt(10);  //se una metodos asincronos es el pratron de diseño de node js 
    return await bcrypt.hash(password, salt);
};

//metodo para comparar contraseñas cuando the user  login 
UserSchema.methods.matchPassword = async function(password){
    return await bcryptjs.compare(password, this.password)
};


module.exports = model ('User', UserSchema);