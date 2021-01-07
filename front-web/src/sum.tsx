type Props = {

    message: String;

}


function Hello ({message}:Props){

    return (
        <h1>HELP {message}</h1>
        
    )

}

export default Hello;