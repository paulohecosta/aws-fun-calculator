import React from 'react';
import { render } from 'react-dom';
 
import SequenceDiagram from 'react-sequence-diagram';
 
const input =
  'API Gateway->Lambda Node12: Request\n' +
  'Lambda Node12-->API Gateway: Response\n' +
  'Lambda Node12->STS: Request\n' + 
  'STS-->Lambda Node12: Request\n'
 
const options = {
  theme: 'simple'
};
 
function onError(error: any) {
  console.log(error);
}

function Teste() {
  return <SequenceDiagram input={input} options={options} onError={onError} />;
}
export default Teste;
