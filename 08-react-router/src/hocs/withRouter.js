import { useNavigate, useParams, useSearchParams } from "react-router-dom";
export default function withRouter(WrapperComponent) {
    return function (props) {
        const navigate = useNavigate();
        const params = useParams();
        const { searchParams } = useSearchParams();
        const query = Object.fromEntries(searchParams);

        const router = { navigate, params, query};

        return <WrapperComponent {...props} router={router} />;
    };
}