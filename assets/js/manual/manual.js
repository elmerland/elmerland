
var Manual = React.createClass({displayName: "Manual",
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
    if (this.state.chapterList.length == 0) { return (React.createElement(Loading, null)); }
    return (
      React.createElement("manual", null, 
        React.createElement(Manual.TOC, {chapterList: this.state.chapterList, onChapterSelection: this.handleChapterSelection}), 
        React.createElement(Manual.Chapter, {key: this.state.chapterIdx, data: this.state.chapterList[this.state.chapterIdx], level: 0})
      )
    );
  }
});

Manual.TOC = React.createClass({displayName: "TOC",
  chapterSelected: function(index, e) {
    e.preventDefault();
    this.props.onChapterSelection(index);
  },
  render: function() {
    if (!this.props.chapterList) { return null; }
    var list = this.props.chapterList.map(function(chapter, index) {
      var boundClick = this.chapterSelected.bind(this, index);
      return (
        React.createElement("li", {key: index, className: "chapter"}, 
          React.createElement("a", {href: chapter.src, onClick: boundClick}, chapter.title)
        )
      );
    }.bind(this));
    return (
      React.createElement("toc", null, 
        React.createElement("ul", {className: "chapter-list"}, list)
      )
    );
  }
});

Manual.Chapter = React.createClass({displayName: "Chapter",
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
      return (React.createElement(Manual.Chapter, {key: index, data: section, level: this.props.level + 1}));
    }.bind(this));
    return (
      React.createElement("div", {className: "subsections", ref: "subsections"}, 
        subsectionList
      )
    );
  },
  toggleSection: function() {
    $(React.findDOMNode(this.refs.content)).slideToggle();
    $(React.findDOMNode(this.refs.subsections)).slideToggle();
    this.setState({visible: !this.state.visible});
  },
  render: function() {
    if (!this.props.data) { return (React.createElement(Loading, null)); }
    var title = (React.createElement("h2", null, this.props.data.title));
    if (this.props.level > 0) {
      var caretIcon = this.state.visible ? "fa-caret-down" : "fa-caret-right";
      title = (React.createElement("span", null, React.createElement("i", {className: "symbol fa " + caretIcon}), this.props.data.title));
    }
    var wrapperClass = this.props.level == 0 ? "chapter-wrapper" : "section-wrapper" ;
    var subsections = this.getSubsections();
    return (
      React.createElement("div", {className: wrapperClass}, 
        React.createElement("div", {className: "title chapter-level-" + this.props.level, onClick: this.toggleSection}, 
          title
        ), 
        React.createElement("div", {className: "text", dangerouslySetInnerHTML: this.getContent(), ref: "content"}), 
        subsections
      )
    );
  }
});

var Loading = React.createClass({displayName: "Loading",
  render: function() {
    return (React.createElement("div", null, "Loading..."));
  }
});

$(document).ready(function() {
  React.render(
  React.createElement(Manual, {url: tocUrl}),
  $('.manual-content')[0]
);
});
