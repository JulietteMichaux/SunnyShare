import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Modal, RadioGroup, Button } from 'react-materialize';
import './Kitchen.css';

function Kitchen() {
  const [responseOven, setResponseOven] = useState();
  const [responsedishes, setResponsedishes] = useState();
  const [answerOven, setAnswerOven] = useState(false);
  const [answerdishes, setAnswerdishes] = useState(false);

  return (
    <div className='bg-image-kitchen'>
    <div className='kitchen'>
      <Link to='/house'>
        <i class="medium material-icons">arrow_back</i>
      </Link>
      <Modal className='oven'
        header="Où se trouve le plus grand four solaire du monde?" 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerOven(false);
                setResponseOven()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse button-kitchen1 yellow darken-1'>
            <i className='material-icons'>wb_sunny</i>
          </a>}>
          { !answerOven ? 
              < RadioGroup
              radioClassNames	= 'oven-radio'
              onChange={(event) => setResponseOven(event.target.value) }
              name='question'
              withGap
              value={responseOven}
              options={[
                {label: "dans l'Ouest des Etats-Unis",value: 'false'},
                {label: 'en Chine',value: 'false'},
                {label: 'dans le sud de la France', value: 'correct'}
              ]}
              />
            : (responseOven === 'correct') ? 
              <div className ='solution'>"Bonne réponse.  Le Four d’Odeillo, mis en service en 1970, est le plus puissant four solaire au monde. Sa puissance est d’un megawatt. Situé à Font-Romeu dans les Pyrénées catalanes, il est plus grand que l’Arc de Triomphe."</div>
              :<div className ='solution'>Dommage.. mauvaise réponse.  Le Four d’Odeillo, mis en service en 1970, est le plus puissant four solaire au monde. Sa puissance est d’un megawatt. Situé à Font-Romeu dans les Pyrénées catalanes, il est plus grand que l’Arc de Triomphe.</div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerOven(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>

      <Modal className='dishes'
        header="Utilise-t-on plus d’eau chaude quand on fait sa vaisselle à la main ou avec un lave-vaisselle ?" 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerdishes(false);
                setResponsedishes()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse yellow darken-1 button-kitchen2'>
            <i className='material-icons'>wb_sunny</i>
          </a>}>
          { !answerdishes ? 
              < RadioGroup
              radioClassNames	= 'dishes-radio'
              onChange={(event) => setResponsedishes(event.target.value) }
              name='question'
              withGap
              value={responsedishes}
              options={[
                {label: "au lave-vaisselle",value: 'correct'},
                {label: 'à la main',value: 'false'},
                {label: 'chez ton voisin', value: 'false'}
              ]}
              />
            : (responsedishes === 'correct') ? 
              <div className ='solution'>"Bonne réponse.  Lave-vaisselle avec une consommation de 12 litres en moyenne alors qu’à la main, on consomme de 10 à 40 litres.  / Quand on possède des panneaux solaires, il vaut mieux faire fonctionner son lave-vaisselle en journée."</div>
              :<div className ='solution'>"Dommage... mauvaise réponse. Lave-vaisselle avec une consommation de 12 litres en moyenne alors qu’à la main, on consomme de 10 à 40 litres.  / Quand on possède des panneaux solaires, il vaut mieux faire fonctionner son lave-vaisselle en journée."</div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerdishes(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>

      </div>
    </div>
  )
};

export default Kitchen;
