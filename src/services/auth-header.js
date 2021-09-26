export default function authHeader(props) {
    // const token = JSON.parse(localStorage.getItem("token"));

    if (props) {
        return { "Authorization": "Bearer " + props}
    } else {
        return {};
    }

}