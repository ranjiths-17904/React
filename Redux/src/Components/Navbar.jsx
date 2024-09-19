
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/UserSlice'
const Navbar = () => {
    const userdata = useSelector(selectUser)
    return (
        <div>
            {userdata?.name || "not available"}
        </div>
    )
}

export default Navbar