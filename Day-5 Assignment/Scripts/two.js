console.log("Two");

class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.Coins = 0;
        this.department=[];
    }
    static greet(){
        console.log("Hello");
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.Coins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }
}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role=role;
    }
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
}

class Admin extends Moderator{
    addDepartment(user,department){
        user.department.push(department);
        console.log(user);
    }

}
let user1 = new User('Ram',30,'ram123@gmail.com')
let user2 = new User('Shyam',26,'shyam@gmai.com')
let mod = new Moderator('Radha',20,'radha11@gmail.com','Moderator');
let admin = new Admin('Sita',35 ,'sita22@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addDepartment(user1,'Testing');
admin.addDepartment(user1,'Account');

user1.login();
