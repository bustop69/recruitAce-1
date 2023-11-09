import { Alert } from "react-native";

const CheckCharacters = (title,company,description,salary) =>{
    if (!title.trim() || !company.trim() || !description.trim()||!salary.trim() ) {
        Alert.alert("Opps!",'Please make sure no fields are blank',[{text:"understood"}]);
        return false 
    } else {
        return true
    }
}

export default CheckCharacters;