import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Modal, RadioGroup } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import './ChildrenBedroom.css';

export default function ChildrenBedroom() {
  const [responseChildrenBedroom1, setResponseChildrenBedroom1] = useState();
  const [answerChildrenBedroom1, setAnswerChildrenBedroom1] = useState(false);
  const [responseChildrenBedroom2, setResponseChildrenBedroom2] = useState();
  const [answerChildrenBedroom2, setAnswerChildrenBedroom2] = useState(false);
  return (
    <div className='hero3'>
      <div className='childroom'>
        <Link to='/house'>
      <i class="medium material-icons">arrow_back</i>
      </Link>
      <Modal className='bathtub'
        header="C’est l’hiver, tu as froid pendant que tu fais tes devoirs. Que fais-tu ?" 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerChildrenBedroom1(false);
                setAnswerChildrenBedroom1()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse bathtub pink'>
            <i className='material-icons'>control_point</i>
          </a>}>
          { !answerChildrenBedroom1 ? 
              < RadioGroup
              radioClassNames	= 'bathtub-radio'
              onChange={(event) => setResponseChildrenBedroom1(event.target.value) }
              name='question'
              withGap
              value={responseChildrenBedroom1}
              options={[
                {label: 'Tu demandes à tes parents d’augmenter le chauffage',value: 'false'},
                {label: 'Tu mets un pull',value: 'correct'},
                {label: 'Tu manges une glace ',value: 'false'}
              ]}
              />
            : (responseChildrenBedroom1 === 'correct') ? 
              <div className ='solution'>"Bonne réponse. Baisser la température de 1°C Les classes sont parfois surchauffées ! Non seulement c’est inutile et malsain mais, en plus, cela peut fortement « assoupir » la concentration des élèves. Diminuer la température de 1°C dans une école représente une réduction de la facture de 6 à 7%. De 22 à 19°C, on arrive à 20% d’économie!"</div>
              :<div className ='solution'>Mauvaise réponse. Baisser la température de 1°C Les classes sont parfois surchauffées ! Non seulement c’est inutile et malsain mais, en plus, cela peut fortement « assoupir » la concentration des élèves. Diminuer la température de 1°C dans une école représente une réduction de la facture de 6 à 7%. De 22 à 19°C, on arrive à 20% d’économie!.</div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerChildrenBedroom1(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>
      <Modal className='Lavabo'
        header="Quel est le nom du dieu grec du soleil ?" 
        
        actions={
          <Button modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerChildrenBedroom2(false);
                setResponseChildrenBedroom2()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse lavabo pink'>
            <i className='material-icons'>control_point</i>
          </a>}>
          { !answerChildrenBedroom2 ? 
              < RadioGroup
              radioClassNames	= 'lavabo-radio'
              onChange={(event) => setResponseChildrenBedroom2(event.target.value) }
              name='question'
              withGap
              value={responseChildrenBedroom2}
              options={[
                {label: 'Hélios',value: 'correct'},
                {label: 'Zeus',value: 'false'},
                {label: 'Héphaïstos',value: 'false'}
              ]}
              />           
          :(responseChildrenBedroom2 === 'correct') ? 
              <div>'Bonne réponse ! Conseil :  L’hiver, il est conseillé de fermer ses volets la nuit pour consommer moins d’énergie pour chauffer la maison.'</div>
              :<div>'Mauvaise réponse. Conseil :  L’hiver, il est conseillé de fermer ses volets la nuit pour consommer moins d’énergie pour chauffer la maison.</div>
        }
        <Button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick = {() => setAnswerChildrenBedroom2(true)}
          >
          Envoyer
          <i className="material-icons right">send</i>
        </Button>
        </Modal>
      </div>
    </div>
  )
}