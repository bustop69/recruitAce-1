import { Alert } from "react-native";

const checkFormValues = (salary) =>{
    const parsedSalary = parseFloat(salary);
    if (!Number.isInteger(parsedSalary)) {
        Alert.alert("Opps!",'Please make sure salary is entered as a whole number',[{text:"understood"}]);
        return false
    } else{
        return true
    }
}

export default checkFormValues;