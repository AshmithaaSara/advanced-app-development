import UserNav from "./UserNav";
import UserSearch from "./UserSearch";
import UserJob from "./UserJob";
import UserValue from "./UserValue";
import UserFooter from "./UserFooter";
const User=()=>{
    return (
        <>
        <div className="container">
            <UserNav />
            <UserSearch/>
            <UserJob/>
            <UserValue/>
            <UserFooter/>
        </div>
        </>
    )
}
export default User;