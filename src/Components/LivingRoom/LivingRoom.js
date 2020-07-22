import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Modal, Button, RadioGroup } from 'react-materialize';
import './LivingRoom.css';

function LivingRoom() {
  const [responseTV, setResponseTV] = useState();
  const [responselamp, setResponselamp] = useState();
  const [answerTV, setAnswerTV] = useState(false);
  const [answerlamp, setAnswerlamp] = useState(false);


  return (
    <div className='bg-image-livingroom'>
    <div className='parent-livingroom'>
        <Link to='/house'>
          <i class="medium material-icons">arrow_back</i>
        </Link>
        <Modal className='TV'
        header="Trouve le verbe dans la phrase suivante : Hier en quittant la maison, nous avons éteint la télé." 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerTV(false);
                setResponseTV()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse button-livingroom1 purple accent-3'>
            <i className='material-icons'>wb_sunny</i>
          </a>}>
          { !answerTV ? 
              < RadioGroup
              radioClassNames	= 'TV-radio'
              onChange={(event) => setResponseTV(event.target.value) }
              name='question'
              withGap
              value={responseTV}
              options={[
                {label: "quittant",value: 'false'},
                {label: 'avons éteint',value: 'correct'},
                {label: 'éteint', value: 'false'}
              ]}
              />
            : (responseTV === 'correct') ? 
              <div className ='solution'>"Bonne réponse.  Pour moins consommer d’électricité, il est conseillé d’éteindre complètement les appareils électroniques au lieu de les laisser en veille."</div>
              :<div className ='solution'>Dommage.. mauvaise réponse. Pour moins consommer d’électricité, il est conseillé d’éteindre complètement les appareils électroniques au lieu de les laisser en veille.</div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerTV(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>
      <Modal className='lamp'
        header="A quelle date l’homme a-t-il pu pour la première fois produire de l’électricité avec une cellule solaire ?" 
        bottomSheet
        actions={
          <Button  modal="close" flat >Fermer</Button>
          }
          options={
            {dismissible:true,
              onCloseEnd: function(modal, trigger) {
                setAnswerlamp(false);
                setResponselamp()
            }
            }
          }
        trigger=
          {<a className='btn-floating btn-large pulse button-livingroom2 purple accent-3'>
            <i className='material-icons'>wb_sunny</i>
          </a>}>
          { !answerlamp ? 
              < RadioGroup
              radioClassNames	= 'lamp-radio'
              onChange={(event) => setResponselamp(event.target.value) }
              name='question'
              withGap
              value={responselamp}
              options={[
                {label: "1949",value: 'false'},
                {label: '1887',value: 'false'},
                {label: '1916', value: 'correct'}
              ]}
              />
            : (responselamp === 'correct') ? 
              <div className ='solution'>"Bonne réponse.</div>
              :<div className ='solution'>Dommage... mauvaise réponse. </div>
          }
          <Button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            onClick = {() => setAnswerlamp(true)}
            >
            Envoyer
            <i className="material-icons right">send</i>
          </Button>
      </Modal>

        </div>
    </div>
  )
};

export default LivingRoom;