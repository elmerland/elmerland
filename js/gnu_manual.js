
if (!$.gnu_manual) { $.gnu_manual = {}; }
$.gnu_manual.url_prefix = '/gnu_formatted/';

$(document).ready(function() {
  // Generate table of contents if not already loaded.
  if (!$.gnu_manual.toc) {
    var list = $('.contents').children('ul');
    $.gnu_manual.toc = [];
    extractData(list, $.gnu_manual.toc);
  }

  // Generate chapter list.
  setup();
  $('.main-list-item').fitText(2.0, {minFontSize: '14px'});

  // Add click handler to chanpters.
  $('.main-list-item').click(function(e) {
    var idx = parseInt($(this).attr('data-index'));
    $('.gnu-manual .section-wrapper').html('');
    setSelectedChapter(idx);
    setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[idx]);
  });

  // Set chapter 1 as default chapter.
  setSelectedChapter(0);
  setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[0]);
});

// Create a TOC object from the actual TOC.
function extractData(list, content) {
  if (!list) { return; }
  $(list).children('li').each(function(i, e) {
    var newItem = {};
    var link = $(e).children('a')
    newItem.href = link.attr('href');
    newItem.name = link.html();
    newItem.list = [];
    extractData($(e).children('ul'), newItem.list);
    if (newItem.list.length == 0) { newItem.list = null; }
    content.push(newItem);
  });
}

// Generate a list with all the chapters in the TOC.
function setup() {
  $('.gnu-manual .list-level').append('<ul></ul>')
  var list = $('.gnu-manual .list-level ul').addClass('main-list');
  $.each($.gnu_manual.toc, function(i, elem) {
    var item = $('<li></li>');
    item.append(elem.name);
    item.addClass('main-list-item');
    item.attr('data-index', i);
    $(list).append(item);
  });
}

function setSelectedChapter(idx) {
  $($('.main-list-item').removeClass('selected').get(idx)).addClass('selected');
}

// Sets the content of the given item in the given container.
function setSectionContent(container, item, isSubItem, depth) {
  var sectionContent;
  if (isSubItem) {
    var subItem = $('<div/>').addClass('sub-section-item').addClass('level-' + depth);
    subItem.append($('<i/>').addClass('fa').addClass('fa-caret-right'));
    subItem.append(item.name);
    subItem.click(subItemClick);
    sectionContent = $('<div/>').addClass('sub-section-content').css({'display': 'none'});
    $(container).append(subItem).append(sectionContent);
    if (depth > 1) {
      $(container).css({'display': 'none'});
    }
  } else {
    sectionContent = $('<div/>').addClass('section-content');
    $(container).append(sectionContent);
  }

  // Make AJAX call to get section content.
  var url = $.gnu_manual.url_prefix + item.href;
  $.get(url, setItemContent(sectionContent));

  // Create subsection accordion.
  if (item.list && item.list.length > 0) {
    var subSection = $('<div/>').addClass('sub-section-wrapper');
    $(container).append(subSection);
    $.each(item.list, function(i, elem) {
      setSectionContent(subSection, elem, true, depth ? depth + 1 : 1);
    });
  }
}

// Creates a function that will set the container data upon a GET request.
function setItemContent(container) {
  return function(data, textStatus, jqXHR) {
    $(container).html(data);
    $(container).find('a').click(handleContentClick);
  }
}

// Intercepts link clicks of the content and loads appropriate section.
function handleContentClick(event) {
  event.preventDefault();
  var target = $(this).attr('href');
  var path = [];
  getItemPath($.gnu_manual.toc, target, path);
  $('.gnu-manual .section-wrapper').html('');
  setSelectedChapter(path[0]);
  setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[path[0]]);
  showSection(path);
  anchor = target.split('#')[1];
  console.log(anchor);
}

// Toggle section visibility upon click.
function subItemClick(event) {
  $(this).children('.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
  var tmp = $(this).next('.sub-section-content').slideToggle();
  $(tmp).next('.sub-section-wrapper').slideToggle();
}

// Gets the path to target section based on the TOC.
function getItemPath(list, target, path) {
  var foundIt = false;
  if (!list || list.length === 0) { return foundIt; }
  $.each(list, function(i, elem) {
    if (elem.href === target) {
      path.unshift(i);
      foundIt = true;
      return false;
    } else if (getItemPath(elem.list, target, path)) {
      path.unshift(i);
      foundIt = true;
      return false;
    }
  });
  return foundIt;
}

// Given a path, it makes sure tha apropriate sections are visibile.
function showSection(path) {
  path.shift();
  var wrapper = $('.gnu-manual .section-wrapper .sub-section-wrapper');
  $.each(path, function(i, num) {
    var item = $(wrapper).children('.sub-section-item').get(num);
    $(item).trigger('click');
    wrapper = $(item).next().next();
  })
}


