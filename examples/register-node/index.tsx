import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, RegisterNode, EditableLabel } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow className={styles.editorBd} data={data} graphConfig={{ defaultNode: { shape: 'customNode' } }} />
        <RegisterNode
          name="customNode"
          config={{
            getCustomConfig(model) {
              return {
                wrapperStyle: {
                  fill: '#000000',
                },
              };
            },
          }}
          extend="bizFlowNode"
        />
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
