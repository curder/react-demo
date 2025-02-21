import { useNavigate, useParams } from "react-router-dom";
export default function withRouter(WrapperComponent) {
    return function (props) {
        const navigate = useNavigate();
        const params = useParams();

        const router = { navigate, params };

        return <WrapperComponent {...props} router={router} />;
    };
}