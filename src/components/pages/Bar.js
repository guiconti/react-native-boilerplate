import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarText from '../elements/BarText';
import { getBarExample, getBarAnotherExample } from '../../reducers/selectors';
import { fetchExample, anotherExample } from '../../actions/barActions';

const BarPage = () => {
  const dispatch = useDispatch();
  const example = useSelector(getBarExample);
  const secondExample = useSelector(getBarAnotherExample);
  useEffect(() => {
    dispatch(fetchExample());
    dispatch(anotherExample({
      fieldName: 'anotherExample',
      value: 'Not a delayed example'
    }));
  }, []);

  return (
    <div>
      <h2 className="alt-header">Example</h2>
      <BarText fixedText="The example value is" dynamicText={example}/>
      <BarText fixedText="The another example value is" dynamicText={secondExample}/>
    </div>
  )
}

export default BarPage;