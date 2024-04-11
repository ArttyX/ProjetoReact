import CustomInput from './components/input-fatec';
import './styles.css'; // Importe o arquivo CSS onde está definida a classe .container
import './styles.css';
const App = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="container"> {/* Aqui estamos aplicando a classe .container */}
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <div>
          <label>Nome:</label>
          <CustomInput type="text" placeholder="Digite seu nome" initialValue={''} />
        </div>
        <div>
          <label>E-mail:</label>
          <CustomInput type="email" placeholder="Digite seu e-mail" initialValue={''} />
        </div>
        <div>
          <label>Telefone:</label>
          <CustomInput type="tel" placeholder="Digite seu telefone" initialValue={''} />
        </div>
        <button type="submit" className="custom-button">Enviar</button>
      </form>
    </div>
  );
};

export default App;
