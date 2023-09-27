const userController=require("../controllers/user.contollers")

module.exports=(app)=>{
    app.get("/users",userController.getAllUsers)
    app.get("/users/:id",userController.getOneUser)
    app.post("/users/new",userController.createUser)
    app.patch("/users/edit/:id",userController.updateUser)
    app.delete("/users/delete/:id",userController.deleteUser)
}