const React = require('react');

let Description = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="full-width-section">
        <h2 className="mui-font-style-title">你好，我是Zuozuo</h2>
        <h2 className="mui-font-style-title">之所以是MissCat.sinaapp.com</h2>
        <h2 className="mui-font-style-title">不仅仅是因为猫小姐</h2>
        <h2 className="mui-font-style-title">而且，她是我每天都想念的猫</h2>
        <h2 className="mui-font-style-title">这是我们的故事</h2>
        <h2 className="mui-font-style-title">我不会写php</h2>
        <h2 className="mui-font-style-title">我只爱Java和璐琪</h2>
      </div>


    );
  }
});

module.exports = Description;
