export const checkValidData=(email,password,name)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    if(!isEmailValid){
        return "Email entered is not valid";
    }
    if(!isPasswordValid){
        return "Password entered is not valid";
    }
    if(!isNameValid){
        return "Name Entered is not valid";
    }
    return null;
}