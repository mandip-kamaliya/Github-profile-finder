export default function User({user}){

    const {avatar_url,followers,following,login,public_repos,name} = user;
    return <div className="user">
        <div>
            <img src={avatar_url} alt="User"/>
        </div>
        <a href={`https://github.com/${login}`} >{name || login} </a>
        <div>
        <p>followers:{followers}</p>
        </div>
       
        <p>following:{following}</p>
        <div>
            public repo : {public_repos}
        </div>
        
    </div>
}