export default function User({user}){

    const {avatar_url,followers,folowing} = User;
    return <div className="user">
        <div>
            <img src={avatar_url} alt="user"/>
        </div>
    </div>
}