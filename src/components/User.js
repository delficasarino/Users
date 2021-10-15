import moment from 'moment';

export default function User({image, name, birthday, destacado}){
    return(
        <article className="signo">
            <h2 className="avatar" style={{backgroundColor:image}}>
               {name.charAt(0)}
            </h2>
            <h3 className="birthdayText">{destacado !== undefined ? <i class="fas fa-birthday-cake"></i> : null}</h3>
            <h2>{name}</h2>
            <p>Fecha de nacimiento: {moment(birthday).format('DD-MM-YY')}</p>
        </article>

    )
}