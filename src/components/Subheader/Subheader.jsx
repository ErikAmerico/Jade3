
import './Subheader.css';
import Navigation from '../NavFolder/Navigation';

export default function Subheader() {
  return (
    <div className="sub-header">
      <div className="container">
        <Navigation />
      </div>
    </div>

  );
}

// Remove outer div to make nav go full lenght
