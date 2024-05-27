import logo from '../assets/logo2.png';
import praia from '../assets/praia5.png';

const SobreNos = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="main-header" style={{ backgroundColor: '#00ccff', padding: '20px' }}>
        <img src={logo} alt="Logo da empresa" className="logo" style={{ width: '150px' }} /> 
      </header>

      <main className="main-content" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="about-section" style={{ maxWidth: '800px', padding: '20px' }}>
          <div className="about-text">
            <h1 style={{ color: '#fbdc51', fontSize: '36px', marginBottom: '20px', textAlign: 'left' }}>Quem somos?</h1>
          </div>

          <div className="features" style={{ marginTop: '40px' }}>
            <div className="feature" style={{ marginBottom: '20px' }}>
              <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '18px', textAlign: 'left' }}>Paulo Henrique Nascimento de Carvalho</h2>
            </div>

            <div className="feature" style={{ marginBottom: '20px' }}>
              <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '10px', textAlign: 'left' }}>Thiago Vinicius de Araujo</h2>
            </div>

            <div className="feature" style={{ marginBottom: '20px' }}>
              <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '10px', textAlign: 'left' }}>                    "SOS Recife", iniciativa liderada por Paulo e Thiago da Faculdade Uninassau, é dedicada à segurança dos banhistas na orla do Recife. Nosso objetivo é implementar soluções inovadoras para reduzir os riscos de incidentes com tubarões. Queremos proporcionar um ambiente seguro e consciente para todos que desfrutam das praias da região.
</h2>
            </div>

           

           
          </div>
        </div>
      </main>

      <footer className="main-footer" style={{ backgroundColor: '#00ccff' }}>
      
      </footer>
    </div>
  );
};

export default SobreNos;
