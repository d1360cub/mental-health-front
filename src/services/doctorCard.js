const API_URL = "http://localhost:8080/api";

const showAllPerson = async () =>{
    try {
        const response = await fetch (`${API_URL}/person`);
        const persons = await response.json();
        return persons;
        
    } catch (error) {
        throw new Error(error);
        
    }

}

export default showAllPerson;