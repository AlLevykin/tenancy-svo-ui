import logo from '../../Static/logo.svg';

const logoStyle = {
    background: 'url('+logo+')',
    backgroundSize: '241px 31px',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center', 
    backgroundRepeatX: 'no-repeat',
    backgroundRepeatY: 'no-repeat',
    marginTop: '1em',
    marginBottom: '3em',    
    width: '100%',
    height: '30px'
  };

function Logo() {
    return (
        <div style={logoStyle}></div>
    );
}

export default Logo;