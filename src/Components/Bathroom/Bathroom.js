import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import './Bathroom.css';

export default function Bathroom() {
  const [responseBathtub, setResponseBathtub] = useState();
  const [responseLavabo, setResponseLavabo] = useState();
  const [answerBathtub, setAnswerBathtub] = useState(false);
  const [answerLavabo, setAnswerLavabo] = useState(false);

  return (
    <div className='hero1'>
      <div className='bathroom'>
      <Modal className='bathtub'
        header="Quel est le meilleur moyen de te laver en dépendant moins d’énergie?" 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerBathtub(false);
                setResponseBathtub()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse bathtub pink'>
            <i className='material-icons'>control_point</i>
          </a>}>
          { !answerBathtub ? 
              < RadioGroup
              radioClassNames	= 'bathtub-radio'
              onChange={(event) => setResponseBathtub(event.target.value) }
              name='question'
              withGap
              value={responseBathtub}
              options={[
                {label: 'un bain',value: 'false'},
                {label: 'une douche',value: 'correct'},
                {label: 'un saut dans la mare',value: 'false'}
              ]}
              />
            : (responseBathtub === 'correct') ? 
              <div className ='solution'>"Bonne réponse. Une baignoire correctement remplie équivaut à 5 à 7 douches. Si tu dois choisir entre douche et bain, choisis la douche sans hésitation, à condition de ne pas y rester plus de 5-10’."</div>
              :<div className ='solution'>Mauvaise réponse. Une baignoire correctement remplie équivaut à 5 à 7 douches. Si tu dois choisir entre douche et bain, choisis la douche sans hésitation, à condition de ne pas y rester plus de 5-10’.</div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerBathtub(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>

      <Modal className='Lavabo'
        header="Une famille utilise 412l d’eau par jour. Calcule sa consommation pendant une semaine ?" 
        
        actions={
          <Button modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerLavabo(false);
                setResponseLavabo()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse lavabo pink'>
            <i className='material-icons'>control_point</i>
          </a>}>
          { !answerLavabo ? 
              < RadioGroup
              radioClassNames	= 'lavabo-radio'
              onChange={(event) => setResponseLavabo(event.target.value) }
              name='question'
              withGap
              value={responseLavabo}
              options={[
                {label: '2884 litres',value: 'correct'},
                {label: '1042 litres',value: 'false'},
                {label: '4120 litres',value: 'false'}
              ]}
              />           
          :(responseLavabo === 'correct') ? 
              <div>'Bonne réponse ! Conseil : utilise de préférence l’eau froide pour te laver les mains.'</div>
              :<div>'Mauvaise réponse. 2884 litres. Conseil : Utilise de préférence l’eau froide pour te laver les mains. '</div>
        }
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick = {() => setAnswerLavabo(true)}
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>
        </Modal>
      </div>
    </div>
  )
}