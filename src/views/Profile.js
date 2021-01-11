import LayoutBase from "../components/layout";
import TableBasicData from "../components/panel/table.basicdata";
const BreadCrumb = ["Home", "Perfil"];

const Profile = () => {
    const Actions = "";
 
    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Perfil" actions={Actions}>
            <TableBasicData />          
        </LayoutBase>
    );
};

export default Profile;
