import {createStackNavigator} from "react-navigation";
import LoginForm from "../components/LoginForm";
import EmployeeList from "../components/EmployeeList";


const Navigator = createStackNavigator({
        Login: {screen: LoginForm},
        EmployeeList: {screen: EmployeeList}
    },
    {
        initialRouteName: 'Login',
        headerMode: "none"
    });

export default Navigator;