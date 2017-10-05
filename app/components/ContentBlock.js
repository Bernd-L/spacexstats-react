import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import ScrollableAnchor from 'react-scrollable-anchor';

import Navbar from 'components/Navbar';
import Ribbon from 'components/Ribbon';
import IntegerStat from 'components/stats/IntegerStat';
import TextStat from 'components/stats/TextStat';
import TimeStat from 'components/stats/TimeStat';

class ContentBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStat: props.stats[0],
    };

    this.navbarTabs = [];
    for (const stat of props.stats) {
      this.navbarTabs.push(stat.tabTitle);
    }
  }

  onNavbarChange = (tab) => {
    for (const stat of this.props.stats) {
      if (tab === stat.tabTitle) {
        this.setState({currentStat: stat});
      }
    }
  }

  render() {
    let statcomponent;
    switch (this.state.currentStat.type) {
      case 'countdown':
      case 'timer':
        statcomponent = <TimeStat data={this.state.currentStat.data} type={this.state.currentStat.type} />;
        break;

      case 'integer':
        statcomponent = <IntegerStat data={this.state.currentStat.data} />;
        break;

      case 'text':
        statcomponent = <TextStat data={this.state.currentStat.data} />;
        break;

      case 'barchart':
        statcomponent = <Bar data={this.state.currentStat.data} options={this.state.currentStat.options} />;
        break;

      default:
        statcomponent = 'Nothing to display';
    }

    // Exception: add ribbon for the next launch section (launch datetime)
    let ribbonText = null;
    if (this.props.anchor === 'nextlaunch') {
      ribbonText = this.state.currentStat.data.format('MMMM Do, h:mm:ssa');
    }

    const background = this.state.currentStat.background ? this.state.currentStat.background : this.props.backgroundImage;

    return (
      <article className="ContentBlock" style={{backgroundImage: `url(img/backgrounds/${background})`}}>
        <ScrollableAnchor id={this.props.anchor}><span /></ScrollableAnchor>
        <div className="fx-container">
          <div className="fx-col full-height">
            <header className="ContentBlock__titleWrapper fx-col fx-center-xs padded">
              <h2 className="ContentBlock__title">
                {this.props.titlePrefix} - {this.state.currentStat.title}
              </h2>
            </header>

            <section className="ContentBlock__stat fx-grow fx-col">
              {this.props.onMoveUp &&
                <span className="ContentBlock__control ContentBlock__control--up fa fa-angle-up large"
                      onClick={this.props.onMoveUp}></span>
              }

              {ribbonText &&
                <Ribbon text={ribbonText} />
              }

              <Navbar tabs={this.navbarTabs} onChangeCallback={this.onNavbarChange} />
              <div className="fx-grow fx-row fx-center-xs fx-middle-xs mtop-big">
                {statcomponent}
              </div>
              <div className="ContentBlock__text padded mtop-big">
                {this.state.currentStat.text}
              </div>

              {this.props.onMoveDown &&
                <span className="ContentBlock__control ContentBlock__control--down fa fa-angle-down large"
                      onClick={this.props.onMoveDown}></span>
              }
            </section>
          </div>
        </div>
      </article>
    );
  }
}

ContentBlock.propTypes = {
  titlePrefix: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  anchor: PropTypes.string.isRequired,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
};

export default ContentBlock;
