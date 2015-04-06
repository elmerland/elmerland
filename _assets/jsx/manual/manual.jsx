
var Manual = React.createClass({
  getInitialState: function() {
    return { chapterIdx: 0, chapterList: [] };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({chapterList: data });
      }.bind(this),
      error: function(xhr, state, err) {
        console.error(this.props.url, state, err.toString());
      }.bind(this)
    });
  },
  handleChapterSelection: function(chapter) {
    this.setState({ chapterIdx: chapter });
  },
  render: function() {
    if (this.state.chapterList.length == 0) { return (<Loading/>); }
    return (
      <manual>
        <Manual.TOC chapterList={this.state.chapterList} onChapterSelection={this.handleChapterSelection} />
        <Manual.Chapter key={this.state.chapterIdx} data={this.state.chapterList[this.state.chapterIdx]} level={0} />
      </manual>
    );
  }
});

Manual.TOC = React.createClass({
  chapterSelected: function(index, e) {
    e.preventDefault();
    this.props.onChapterSelection(index);
  },
  render: function() {
    if (!this.props.chapterList) { return null; }
    var list = this.props.chapterList.map(function(chapter, index) {
      var boundClick = this.chapterSelected.bind(this, index);
      return (
        <li key={index} className="chapter">
          <a href={chapter.src} onClick={boundClick}>{chapter.title}</a>
        </li>
      );
    }.bind(this));
    return (
      <toc>
        <ul className="chapter-list">{list}</ul>
      </toc>
    );
  }
});

Manual.Chapter = React.createClass({
  getInitialState: function() {
    return {content: null,
      urlPrefix: '/gnu_formatted/',
      visible: true};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.state.urlPrefix + this.props.data.src,
      success: function(data) {
        this.setState({content: data });
      }.bind(this),
      error: function(xhr, state, err) {
        console.error(this.props.url, state, err.toString());
      }.bind(this)
    });
  },
  getContent: function() {
    if (!this.state.content) { return {__html: ''}; }
    else { return {__html: this.state.content.toString()}; }
  },
  getSubsections: function() {
    if (!this.props.data.subsections) { return null; }
    var subsectionList = this.props.data.subsections.map(function(section, index) {
      return (<Manual.Chapter key={index} data={section} level={this.props.level + 1} />);
    }.bind(this));
    return (
      <div className="subsections" ref="subsections">
        {subsectionList}
      </div>
    );
  },
  toggleSection: function() {
    $(React.findDOMNode(this.refs.content)).slideToggle();
    $(React.findDOMNode(this.refs.subsections)).slideToggle();
    this.setState({visible: !this.state.visible});
  },
  render: function() {
    if (!this.props.data) { return (<Loading/>); }
    var title = (<h2>{this.props.data.title}</h2>);
    if (this.props.level > 0) {
      var caretIcon = this.state.visible ? "fa-caret-down" : "fa-caret-right";
      title = (<span><i className={"symbol fa " + caretIcon}></i>{this.props.data.title}</span>);
    }
    var wrapperClass = this.props.level == 0 ? "chapter-wrapper" : "section-wrapper" ;
    var subsections = this.getSubsections();
    return (
      <div className={wrapperClass}>
        <div className={"title chapter-level-" + this.props.level} onClick={this.toggleSection}>
          {title}
        </div>
        <div className="text" dangerouslySetInnerHTML={this.getContent()} ref="content"></div>
        {subsections}
      </div>
    );
  }
});

var Loading = React.createClass({
  render: function() {
    return (<div>Loading...</div>);
  }
});

$(document).ready(function() {
  React.render(
  <Manual url={tocUrl}/>,
  $('.manual-content')[0]
);
});
