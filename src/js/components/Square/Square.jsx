import React from "react";
import './Square.scss';
import { Ripple } from '@rmwc/ripple';
import { Icon } from '@rmwc/icon';


export default class Square extends React.Component {
  render() {
    return (
      <Ripple className="square" primary>
        <div>
          {/* <Icon icon={{ icon: 'close', size: 'large' }} /> */}
          {/* <Icon icon={{ icon: 'panorama_fish_eye', size: 'large' }} /> */}

        </div>

      </Ripple>
    );
  }
}
