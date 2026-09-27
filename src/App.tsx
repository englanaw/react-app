import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';


function App() {
  const [alertVisible, setIsAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setIsAlertVisible(false)}>
          My alert
        </Alert>
      )}
      <Button color="primary" onClick={() => setIsAlertVisible(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
