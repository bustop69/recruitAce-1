import { Alert } from "react-native";

const checkFormCharacters = (title,company,description,salary) =>{
    if (!title.trim() || !company.trim() || !description.trim()||!salary.trim() ) {
        Alert.alert("Opps!",'Please make sure no fields are blank',[{text:"understood"}]);
        return false 
    } else {
        return true
    }
}

export default checkFormCharacters;