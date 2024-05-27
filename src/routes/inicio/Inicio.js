import React from 'react';
import '../styles/styles2.css'; 
import logo from '../assets/logo2.png';
import celular from '../assets/celular4.png';
import celular2 from '../assets/celular5.png';
import praia from '../assets/praia5.png';

const Inicio = () => {
  return (
    <div className="container">
      <header className="main-header">
        <img src={logo} alt="Logo da empresa" className="logo" /> 
        <div className="image-wrapper"></div>
    
      </header>

      <header className="secondary-header"></header>
      

     
      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <img src={celular} alt="Imagem do celular" style={{ width: '15%' }}/> 
    
    <div className="text-box" style={{ textAlign: 'left', maxWidth: '30%', marginLeft: '20px' }}>
      <h1>O que é o SOS RECIFE?</h1>
    </div>
  </div>

  <div style={{ textAlign: 'justify', maxWidth: '30%', marginLeft: '-713px', marginTop: '-450px' }}>
    <p>O SOS Recife é um aplicativo interativo para dispositivos móveis desenvolvido 
      com o objetivo de reduzir os riscos de incidentes com tubarões na orla do Recife. Com o uso de tecnologias inovadoras, 
      o aplicativo oferece diversas funcionalidades para fornecer informações em tempo real aos usuários, permitindo que 
      tomem decisões mais seguras ao aproveitar as praias da região.</p>
  
  </div>

  <div className="text-box2" style={{ textAlign: 'left', maxWidth: '50%', marginLeft: '-850px' }}>
      <h1>Principais funcionalidades</h1>
    </div>

  <div style={{ textAlign: 'justify', maxWidth: '30%', marginLeft: '-710px', marginTop: '25px' }}>
    <p><strong> • MAPA INTERATIVO - </strong></p>
    <br/>
    <p>Apresenta um mapa interativo da orla com atualizações em tempo real sobre as áreas consideradas seguras ou com possíveis avistamentos de tubarões. </p>
    <br/>
    <p><strong> • ALERTAS EM TEMPO REAL - </strong></p>
    <br/>
    <p>Envia notificações instantâneas sobre avistamentos de tubarões na área, com base nos dados de monitoramento e reporte dos próprios usuários.</p>
    <br/>
    <p><strong> • PREVISÃO DE MARÉS E CONDIÇÕES MARÍTIMAS - </strong></p>
    <br/>
    <p>Fornece informações sobre as condições do mar, marés e correntes, para que os usuários possam tomar decisões informadas antes de entrar na água. </p>
  
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', width: '84%', marginTop: '-510px', marginLeft: '-1005px' }}>
  <img src={celular2} alt="Imagem do celular2" style={{ width: '18%' }}/> 
</div>

<div className="text-box3" style={{ textAlign: 'left', maxWidth: '30%', marginLeft: '820px', marginTop: '-530px' }}>
      <h1>E muito mais</h1>
    </div>

    <div style={{ textAlign: 'justify', maxWidth: '30%', marginLeft: '1168px', marginTop: '20px' }}>
    <p> Além das funcionalidades mencionadas, o SOS Recife também inclui recursos como um botão de SOS para emergências, histórico de incidentes relatados pela comunidade, ferramenta de feedback para os usuários compartilharem suas experiências e muito mais. Em resumo, o aplicativo oferece uma plataforma abrangente e integrada para ajudar os moradores e visitantes da orla do Recife a desfrutarem das praias de forma mais segura e informada. </p>
  
  </div>


<header className="tres-header" style={{ marginTop: '405px' }}></header>

<div style={{ textAlign: 'justify', width: '102%', marginTop: '0px' }}>
    <img src={praia} alt="praia" style={{ width: '100%' }} />
</div>
<footer className="main-footer">

</footer>
</main>

    </div>
  );
};

export default Inicio;
